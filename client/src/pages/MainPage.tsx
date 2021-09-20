import { useMainPageStyles } from '../styles/muiStyles';
import { Button, Grid, Paper } from '@material-ui/core';
import UsersTable from '../components/UsersTable';
import * as React from 'react';
import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import { IUser } from '../Interfaces/IUser';
import { RolesEnum } from '../Enums/RolesEnum';

const testUsers: IUser[] = [
    { id: 1, email: 'eemaail', password: '332', name: 'aaa', surname: 'User', number: '2200342345', role: RolesEnum.Admin },
    { id: 2, email: 'mail', password: '332', name: 'User', surname: 'User', number: '2200342345', role: RolesEnum.Worker },
];

const MainPage = () => {
    const classes = useMainPageStyles();
    const [filterValue, setFilterValue] = useState('');
    const filteredUsers = testUsers.filter(p => {
        if (filterValue.length !== 0 && filterValue.length > 3) {
            return p.name.toLowerCase().includes(filterValue.toLowerCase()) || p.email.toLowerCase().includes(filterValue.toLowerCase());
        } else {
            return testUsers;
        }
    });

    return (
        <div className={classes.root}>
            <Paper className={classes.mainPagePaper}>
                <Grid container spacing={2}>
                    <Grid item md={10}>
                        <FilterBar value={filterValue} setValue={setFilterValue} />
                    </Grid>
                    <Grid item md container alignItems='center'>
                        <Grid item>
                            <Button variant='contained' color='primary' fullWidth>
                                Добавить пользователя
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <UsersTable users={filteredUsers} />
            </Paper>
        </div>
    );
};

export default MainPage;
