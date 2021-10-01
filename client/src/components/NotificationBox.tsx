import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification, selectNotifyState } from '../redux/slices/notifySlice';

const NotificationBox = () => {
    const dispatch = useDispatch();
    const { message, type } = useSelector(selectNotifyState);
    const clearNotify = () => {
        dispatch(clearNotification());
    };
    if (!message || !type) return null;
    return (
        <Snackbar open={true} onClose={clearNotify}>
            <Alert severity={type}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default NotificationBox;