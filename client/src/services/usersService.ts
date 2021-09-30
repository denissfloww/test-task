import axios from 'axios';
import { backendUrl } from '../urls';
import { IUser } from '../interfaces/IUser';

const getUsers = async () => {
    const response = await axios.get(`${backendUrl}/users`);
    return response.data;
};

const getUserById = async (id: number) => {
    const response = await axios.get(`${backendUrl}/user/${id}`);
    return response.data;
}

const insertUser = async (user: IUser) => {
    await axios.post(`${backendUrl}/user`, {
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname,
        number: user.number,
        role: user.role,
    }).catch(function(e) {
        if (e.response) {
            console.log('f')
        }
    });
};

const deleteUser = async (id: number) => {
    console.log(id);
    await axios.delete(`${backendUrl}/user/${id}`);
};

const updateUserPassword = async (userId: number, password: string) => {
    await axios.put(`${backendUrl}/user/password`, {
        password: password,
        userId: userId
    });
};

const updateUser = async (user: IUser) => {
    await axios.put(`${backendUrl}/user`, {
        id: user.id,
        email: user.email,
        password:user.password,
        name:user.name,
        surname: user.surname,
        number: user.number,
        role: user.role
    })
}

const UsersService = {
    getUsers,
    insertUser,
    deleteUser,
    updateUserPassword,
    updateUser,
    getUserById
};

export default UsersService;
