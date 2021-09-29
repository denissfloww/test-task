import * as React from 'react';
import { IUser } from '../interfaces/IUser';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ConfirmDeleteDialog from './Dialogs/ConfirmDeleteDialog';
import ChangePasswordConfirmDialog from './Dialogs/ChangePasswordConfirmDialog';
import { RolesEnum } from '../enums/RolesEnum';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUserPassword } from '../redux/slices/usersSlice';
import TableActions from './TableActions';

interface UserTableProps {
    users: IUser[];
}

const columns = ['ID', 'Имя', 'Фамилия', 'Email', 'Номер', 'Роль', ''];

const UsersTable = (props: UserTableProps) => {
    const { users } = props;
    const dispatch = useDispatch();
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openPassChangeDialog, setOpenPassChangeDialog] = React.useState(false);
    const [userId, setUserId] = React.useState(0);
    const handleClickOpenDeleteDialog = (id: number) => {
        setUserId(id);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
        handleCloseDeleteDialog();
    };

    const handleClickOpenPassChangeDialog = (id: number) => {
        setUserId(id);
        setOpenPassChangeDialog(true);
    };

    const handleClosePassChangeDialog = () => {
        setOpenPassChangeDialog(false);
    };

    const handlePassChange = (id: number, password: string) => {
        dispatch(updateUserPassword(id, password));
    };



    return (
        <div style={{ maxWidth: '100%', paddingTop: '5%' }}>
            <TableContainer component={Paper}>
                <Table aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            {columns.map(value => (
                                <TableCell><b>{value}</b></TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.surname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.number}</TableCell>
                                <TableCell>{RolesEnum[user.role]}</TableCell>
                                <TableCell>
                                    <TableActions userData={{
                                        id: user.id,
                                        email: user.email,
                                        name: user.name,
                                        surname: user.surname,
                                        number: user.number,
                                        role: user.role
                                    }} />
                                    <Button onClick={() => {handleClickOpenPassChangeDialog(Number(user.id))}}>
                                        <LockOpenIcon />
                                    </Button>
                                    <Button onClick={() => handleClickOpenDeleteDialog(Number(user.id))}>
                                        <DeleteOutlineIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ConfirmDeleteDialog handleClose={handleCloseDeleteDialog} id={userId} open={openDeleteDialog} handleDelete={handleDelete} />
            <ChangePasswordConfirmDialog
                handleClose={handleClosePassChangeDialog}
                open={openPassChangeDialog}
                id={userId}
                handlePassChange={handlePassChange}
            />
        </div>
    );
};

export default UsersTable;
