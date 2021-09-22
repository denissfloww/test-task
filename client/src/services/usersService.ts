import axios from 'axios';
import { backendUrl } from '../urls';

const getUsers = async () => {
    const response = await axios.get(`${backendUrl}/users`);
    return response.data;
};

const UsersService = {
    getUsers,
};

export default UsersService;