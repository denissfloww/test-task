import { useMainPageStyles } from '../styles/muiStyles';
import { Button, Grid, Paper } from '@material-ui/core';
import UsersTable from '../components/UsersTable';
import * as React from 'react';
import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import { IUser } from '../Interfaces/IUser';
import { RolesEnum } from '../Enums/RolesEnum';
import NewUserDialogComponent from '../components/NewUserDialogComponent';

const testUsers: IUser[] = [
    { id: 1, email: 'eemaail', password: '332', name: 'aaa', surname: 'User', number: '2200342345', role: RolesEnum.Admin },
    { id: 2, email: 'mail', password: '332', name: 'User', surname: 'User', number: '2200342345', role: RolesEnum.Worker },
];

const MainPage = () => {
    const classes = useMainPageStyles();
    const [filterValue, setFilterValue] = useState('');
    const [openInsertNewUserDialog, setOpenInsertNewUserDialog] = React.useState(false);
    const filteredUsers = testUsers.filter(p => {
        if (filterValue.length !== 0 && filterValue.length > 3) {
            return p.name.toLowerCase().includes(filterValue.toLowerCase()) || p.email.toLowerCase().includes(filterValue.toLowerCase());
        } else {
            return testUsers;
        }
    });
    const handleClickOpenInsertNewUserDialog = () => {
        setOpenInsertNewUserDialog(true);
    };

    const handleCloseInsertNewUserDialog = () => {
        setOpenInsertNewUserDialog(false);
    };

    const handleInsert = () => {
        console.log('ggg')
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.mainPagePaper}>
                <FilterBar value={filterValue} setValue={setFilterValue} />
                <Grid container style={{paddingTop:'1%'}}>
                    <Grid item md={3} >
                        <Button variant='contained' color='primary' onClick={handleClickOpenInsertNewUserDialog}>
                            Добавить пользователя
                        </Button>
                    </Grid>
                </Grid>
                <UsersTable users={filteredUsers} />
                <NewUserDialogComponent open={openInsertNewUserDialog} handleClose={handleCloseInsertNewUserDialog} handleInsert={handleInsert} />
            </Paper>
        </div>
    );
};

export default MainPage;
