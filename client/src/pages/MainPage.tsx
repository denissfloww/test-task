import { useMainPageStyles } from '../styles/muiStyles';
import { Button, Grid, Paper } from '@material-ui/core';
import UsersTable from '../components/UsersTable';
import * as React from 'react';
import { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar';
import { IUser } from '../interfaces/IUser';
import { useDispatch, useSelector } from 'react-redux';
import NewUserDialogComponent from '../components/NewUserDialogComponent';
import { fetchUsers, insertUser, selectUsersState } from '../redux/slices/usersSlice';


const MainPage = () => {
    const classes = useMainPageStyles();
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState('');
    const [openInsertNewUserDialog, setOpenInsertNewUserDialog] = React.useState(false);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    const { users } = useSelector(selectUsersState);
    const filteredUsers = users.filter((p: IUser) => {
        if (filterValue.length !== 0 && filterValue.length > 3) {
            return p.name.toLowerCase().includes(filterValue.toLowerCase()) || p.email.toLowerCase().includes(filterValue.toLowerCase());
        } else {
            return users;
        }
    });
    const handleClickOpenInsertNewUserDialog = () => {
        setOpenInsertNewUserDialog(true);
    };

    const handleCloseInsertNewUserDialog = () => {
        setOpenInsertNewUserDialog(false);
    };

    const handleInsert = (user: IUser) => {
        dispatch(insertUser(user))
        handleCloseInsertNewUserDialog()
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.mainPagePaper}>
                <FilterBar value={filterValue} setValue={setFilterValue} />
                <Grid container style={{ paddingTop: '1%' }}>
                    <Grid item md={3}>
                        <Button variant='contained' color='primary' onClick={handleClickOpenInsertNewUserDialog}>
                            Добавить пользователя
                        </Button>
                    </Grid>
                </Grid>
                <UsersTable users={filteredUsers} />
                <NewUserDialogComponent
                    open={openInsertNewUserDialog}
                    handleClose={handleCloseInsertNewUserDialog}
                    handleInsert={handleInsert}
                />
            </Paper>
        </div>
    );
};

export default MainPage;
