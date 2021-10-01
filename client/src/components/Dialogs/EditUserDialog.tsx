import { DialogContentText, DialogTitle } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';

import { UserPayLoad } from '../../types';
import EditUserForm from '../Forms/EditUserForm';

interface IDialogProps {
    open: boolean;
    handleClose: () => void;
    userData: UserPayLoad;
}

const EditUserDialog = (props: IDialogProps) => {
    const { handleClose, open, userData } = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{'Редактирование пользователя'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <EditUserForm handleClose={handleClose} userData={userData} />
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default EditUserDialog;
