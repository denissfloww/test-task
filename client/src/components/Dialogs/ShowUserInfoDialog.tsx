import { DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';

import { UserPayLoad } from '../../types';
import UserInfoForm from '../Forms/UserInfoForm';

interface IDialogProps {
    open: boolean;
    handleClose: () => void;
    userData: UserPayLoad;
}

const ShowUserInfoDialog = (props: IDialogProps) => {
    const {open, handleClose, userData} = props

    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{'Информация'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                   <UserInfoForm userData={userData}/>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Закрыть
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default ShowUserInfoDialog