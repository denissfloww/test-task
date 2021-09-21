import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface InputValues {
    password: string;
    confirmation: string;
}

const validationSchema = yup.object({
    password: yup.string().required('Заполните это поле!'),
    confirmation: yup.string().required('Заполните это поле!'),
});

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    handlePassChange: () => void;
}

const PassChangeConfirmDialog = (props: DialogProps) => {
    const { handleClose, open, handlePassChange } = props;

    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const handlePasswordChange = ({ password, confirmation }: InputValues) => {
        console.log(password, confirmation);
        handlePassChange();
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <form onSubmit={handleSubmit(handlePasswordChange)}>
                <DialogTitle id='alert-dialog-title'>{'Изменение пароля'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            autoFocus
                            inputRef={register}
                            error={'password' in errors}
                            helperText={'password' in errors ? errors.password.message : ''}
                            margin='dense'
                            name='password'
                            label='Новый пароль'
                            type='password'
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            inputRef={register}
                            error={'confirmation' in errors}
                            helperText={'confirmation' in errors ? errors.confirmation.message : ''}
                            margin='dense'
                            name='confirmation'
                            label='Подтвердите пароль'
                            type='password'
                            fullWidth
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Отмена
                    </Button>
                    <Button type='submit' color='secondary'>
                        Изменить
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default PassChangeConfirmDialog;
