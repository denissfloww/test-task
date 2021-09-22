import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { IUser } from '../../interfaces/IUser';
import UsersService from '../../services/usersService';

interface InitialAuthState {
    users: IUser[];
}

const initialState: InitialAuthState = {
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
        } catch (e) {
            console.log(e);
        }
    };
};

export const selectUsersState = (state: RootState) => state.users;

export default usersSlice.reducer;
