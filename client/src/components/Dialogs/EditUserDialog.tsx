import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';
import { DialogContentText, DialogTitle } from '@material-ui/core';
import { UserPayLoad } from '../../types';
import EditForm from '../Forms/EditForm';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    userData: UserPayLoad;
    userId: number;
}

const EditUserDialog = (props: DialogProps) => {
    const { handleClose, open, userData } = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
                <DialogTitle id='alert-dialog-title'>{'Редактирование пользователя'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <EditForm handleClose={handleClose} userData={userData} />
                    </DialogContentText>
                </DialogContent>
        </Dialog>
    );
};

export default EditUserDialog;
