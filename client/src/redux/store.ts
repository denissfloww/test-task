import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import notifySlice from './slices/notifySlice';
import userReducer from './slices/usersSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        notify: notifySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;