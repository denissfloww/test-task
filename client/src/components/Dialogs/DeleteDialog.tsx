import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteUser } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    id: number;
}

const DeleteDialog = (props: DialogProps) => {
    const { handleClose, open, id } = props;
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
        handleClose();
    };
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

export default DeleteDialog;
