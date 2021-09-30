import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ChangePasswordForm from '../Forms/ChangePasswordForm';

interface IDialogProps {
    open: boolean;
    handleClose: () => void;
    id: number;
}

const ChangePasswordDialog = (props: IDialogProps) => {
    const { handleClose, open, id } = props;
    const [errorModalOpen, setErrorModalOpen] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleErrorOpen = (text: string) => {
        setErrorModalOpen(true);
        setError(text);
    };

    const handleErrorClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorModalOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{'Изменение пароля'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <ChangePasswordForm id={id} handleErrorOpen={handleErrorOpen} handleClose={handleClose} />
                </DialogContentText>
            </DialogContent>
            <Snackbar open={errorModalOpen} autoHideDuration={4000} onClose={handleErrorClose}>
                <Alert severity='error'>{error}</Alert>
            </Snackbar>
        </Dialog>
    );
};

export default ChangePasswordDialog;
