import axios from 'axios';
import { backendUrl } from '../urls';
import { IUser } from '../interfaces/IUser';

const getUsers = async () => {
    const response = await axios.get(`${backendUrl}/users`);
    return response.data;
};

const insertUser = async (user: IUser) => {
    await axios.post(`${backendUrl}/user`, {
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname,
        number: user.number,
        role: user.role,
    });
};

const deleteUser = async (id: number) => {
    console.log(id)
    await axios.delete(`${backendUrl}/user/${id}`);
};

const UsersService = {
    getUsers,
    insertUser,
    deleteUser,
};

export default UsersService;
