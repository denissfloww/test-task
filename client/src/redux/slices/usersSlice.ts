import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../interfaces/IUser';
import UsersService from '../../services/usersService';
import { getErrorMsg } from '../../utils/helperFunctions';
import { AppThunk, RootState } from '../store';
import { notify } from './notifySlice';

interface InitialState {
    users: IUser[];
}

const initialState: InitialState = {
    users: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

export const fetchUsers = (): AppThunk => {
    return async dispatch => {
        try {
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e: any) {
            dispatch(notify(getErrorMsg(e), 'error'))
        }
    };
};

export const insertUser = (user: IUser): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.insertUser(user);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
            dispatch(notify('Пользователь добавлен!', 'success'))
        } catch (e: any) {
            dispatch(notify(getErrorMsg(e), 'error'))
        }
    };
};

export const deleteUser = (id: number): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.deleteUser(id);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
            dispatch(notify('Пользователь удален!', 'success'))
        } catch (e: any) {
            dispatch(notify(getErrorMsg(e), 'error'))
        }
    };
};

export const updateUserPassword = (id: number, password: string): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.updateUserPassword(id, password);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
            dispatch(notify('Пароль обновлен!', 'success'))
        } catch (e: any) {
            dispatch(notify(getErrorMsg(e), 'error'))
        }
    };
};

export const updateUser = (user: IUser): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.updateUser(user);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
            dispatch(notify('Данные пользователя обновленны!', 'success'))
        } catch (e: any) {
            dispatch(notify(getErrorMsg(e), 'error'))
        }
    };
};

export const selectUsersState = (state: RootState) => state.users;

export default usersSlice.reducer;
