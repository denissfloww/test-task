import * as React from 'react';
import { IUser } from '../interfaces/IUser';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DeleteConfirmDialog from './DeleteConfirmDialogComponent';
import PassChangeConfirmDialog from './PassChangeDialogComponent';
import { RolesEnum } from '../enums/RolesEnum';

interface UserTableProps {
    users: IUser[];
}

const columns = ['ID', 'Имя', 'Фамилия', 'Email', 'Номер', 'Роль', ''];

const UsersTable = (props: UserTableProps) => {
    const { users } = props;
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openPassCgangeDialog, setOpenPassCgangeDialog] = React.useState(false);
    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleDelete = () => {
        console.log('делете')
    };

    const handleClickOpenPassCgangeDialog = () => {
        setOpenPassCgangeDialog(true);
    };

    const handleClosePassChangeDialog = () => {
        setOpenPassCgangeDialog(false);
    };

    const handlePassChange = () => {
        console.log('')
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
                                    <Button onClick={handleClickOpenPassCgangeDialog}>
                                        <LockOpenIcon />
                                    </Button>
                                    <Button onClick={handleClickOpenDeleteDialog}>
                                        <DeleteOutlineIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteConfirmDialog handleClose={handleCloseDeleteDialog} open={openDeleteDialog} handleDelete={handleDelete} />
            <PassChangeConfirmDialog handleClose={handleClosePassChangeDialog} open={openPassCgangeDialog} handlePassChange={handlePassChange} />
        </div>
    );
};

export default UsersTable;
