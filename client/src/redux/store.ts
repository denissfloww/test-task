import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import userReducer from './slices/usersSlice';
import notifySlice from './slices/notifySlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        notify: notifySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;