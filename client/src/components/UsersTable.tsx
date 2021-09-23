import * as React from 'react';
import { IUser } from '../interfaces/IUser';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DeleteConfirmDialog from './DeleteConfirmDialogComponent';
import PassChangeConfirmDialog from './PassChangeDialogComponent';
import { RolesEnum } from '../enums/RolesEnum';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/slices/usersSlice';

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

    const handleClickOpenPassChangeDialog = () => {
        setOpenPassChangeDialog(true);
    };

    const handleClosePassChangeDialog = () => {
        setOpenPassChangeDialog(false);
    };

    const handlePassChange = () => {
        console.log('');
    };

    return (
        <div style={{ maxWidth: '100%', paddingTop: '5%' }}>
            <TableContainer component={Paper}>
                <Table aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            {columns.map(value => (
                                <TableCell>{value}</TableCell>
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
                                    <Button>
                                        <EditIcon />
                                    </Button>
                                    <Button onClick={handleClickOpenPassChangeDialog}>
                                        <LockOpenIcon />
                                    </Button>
                                    <Button onClick={() => handleClickOpenDeleteDialog(user.id)}>
                                        <DeleteOutlineIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteConfirmDialog handleClose={handleCloseDeleteDialog} id={userId} open={openDeleteDialog} handleDelete={handleDelete} />
            <PassChangeConfirmDialog
                handleClose={handleClosePassChangeDialog}
                open={openPassChangeDialog}
                handlePassChange={handlePassChange}
            />
        </div>
    );
};

export default UsersTable;
