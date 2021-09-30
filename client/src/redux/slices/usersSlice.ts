import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { IUser } from '../../interfaces/IUser';
import UsersService from '../../services/usersService';
import { getErrorMsg } from '../../utils/helperFunctions';

interface InitialState {
    users: IUser[];
    error: string | null;
}

const initialState: InitialState = {
    users: [],
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        setError:(state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
});

export const { setUsers, setError } = usersSlice.actions;

export const fetchUsers = (): AppThunk => {
    return async dispatch => {
        try {
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e: any) {
            dispatch(setError(getErrorMsg(e)))
        }
    };
};

export const insertUser = (user: IUser): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.insertUser(user);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e: any) {
            dispatch(setError(getErrorMsg(e)))
        }
    };
};

export const deleteUser = (id: number): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.deleteUser(id);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e: any) {
            dispatch(setError(getErrorMsg(e)))
        }
    };
};

export const updateUserPassword = (id: number, password: string): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.updateUserPassword(id, password);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e: any) {
            dispatch(setError(getErrorMsg(e)))
        }
    };
};

export const updateUser = (user: IUser): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.updateUser(user);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e: any) {
            dispatch(setError(getErrorMsg(e)))
        }
    };
};

export const selectUsersState = (state: RootState) => state.users;

export default usersSlice.reducer;
