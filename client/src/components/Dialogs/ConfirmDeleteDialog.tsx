import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    handleDelete: (id: number) => void;
    id: number;
}

const ConfirmDeleteDialog = (props: DialogProps) => {
    const { handleClose, open, handleDelete, id } = props;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{'Удаление'}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>Вы уверены что хотите удалить пользователя?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Отмена
                </Button>
                <Button onClick={() => handleDelete(id)} color='secondary' autoFocus>
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDeleteDialog;
