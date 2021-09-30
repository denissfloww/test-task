import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateUserForm from '../Forms/CreateUserForm';

interface IDialogProps {
    open: boolean;
    handleClose: () => void;
}

const CreateNewUserDialog = (props: IDialogProps) => {
    const { handleClose, open } = props;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{'Добавление нового пользователя'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <CreateUserForm handleClose={handleClose} />
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default CreateNewUserDialog;
