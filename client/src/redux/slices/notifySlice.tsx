import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';

interface InitialState {
    message: string | null;
    type: 'success' | 'error' | null;
}

export interface NotifPayload {
    message: string;
    type: 'success' | 'error';
}

const initialState: InitialState = {
    message: null,
    type: null,
};

const notifySlice = createSlice({
    name: 'notify',
    initialState,
    reducers: {
        setNotification: (state, action: PayloadAction<NotifPayload>) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearNotification: state => {
            state.message = null;
            state.type = null;
        },
    },
});

export const { setNotification, clearNotification } = notifySlice.actions;

export const notify = (message: string, type: 'success' | 'error'): AppThunk => {
    return dispatch => {
        dispatch(setNotification({ message, type }));
    };
};

export const selectNotifyState = (state: RootState) => state.notify;

export default notifySlice.reducer;
