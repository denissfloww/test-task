import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { IUser } from '../../interfaces/IUser';
import UsersService from '../../services/usersService';

interface InitialAuthState {
    users: IUser[];
    currentUser: IUser | null
}

const initialState: InitialAuthState = {
    users: [],
    currentUser: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

export const fetchUsers = (): AppThunk => {
    return async dispatch => {
        try {
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e) {
            console.log(e);
        }
    };
};

export const setUser = (user: IUser): AppThunk => {
    return async dispatch => {
        try {
            dispatch(setUser(user));
        } catch (e) {
            console.log(e);
        }
    };
};

export const insertUser = (user: IUser): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.insertUser(user);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteUser = (id: number): AppThunk => {
    return async dispatch => {
        try {
            await UsersService.deleteUser(id);
            const users = await UsersService.getUsers();
            dispatch(setUsers(users));
        } catch (e) {
            console.log(e);
        }
    };
};

export const selectUsersState = (state: RootState) => state.users;

export default usersSlice.reducer;
