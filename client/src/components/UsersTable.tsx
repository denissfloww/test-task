import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';

import { RolesEnum } from '../enums/RolesEnum';
import { IUser } from '../interfaces/IUser';
import TableActions from './TableActions';

interface UserTableProps {
    users: IUser[];
}

const columns = ['ID', 'Имя', 'Фамилия', 'Email', 'Номер', 'Роль', ''];

const UsersTable = (props: UserTableProps) => {
    const { users } = props;

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
                                        role: user.role,
                                        password: user.password
                                    }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UsersTable;
