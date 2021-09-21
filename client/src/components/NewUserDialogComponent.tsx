import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Roles, RolesEnum } from '../Enums/RolesEnum';
import PhoneMask from './PhoneMask';
import { Autocomplete } from '@material-ui/lab';
import InputField from './InputField';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    handleInsert: () => void;
}

interface InputValues {
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    role: RolesEnum;
}

const validationSchema = yup.object({
    email: yup.string().required('Заполните это поле!'),
    password: yup.string().required('Заполните это поле!').min(8, 'Должно быть не менее 8 символов'),
    name: yup.string().required('Заполните это поле!'),
    surname: yup.string().required('Заполните это поле!'),
    phone: yup
        .string()
        .required('Заполните это поле!')
        .matches(/^7\([1-9]+\)\s\d+-\d{4}$/, 'Введите корректный формат телефона'),
});

const NewUserDialog = (props: DialogProps) => {
    const { handleClose, open, handleInsert } = props;
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const handleInsertUser = (values: InputValues) => {
        console.log(values);
        handleInsert();
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <form onSubmit={handleSubmit(handleInsertUser)}>
                <DialogTitle id='alert-dialog-title'>{'Добавление нового пользователя'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <InputField
                            name='email'
                            errors={errors}
                            register={register}
                            type='email'
                            label='Email'
                            helperText={'email' in errors ? errors.email.message : ''}
                        />
                        <InputField
                            name='password'
                            errors={errors}
                            register={register}
                            type='password'
                            label='Пароль'
                            helperText={'password' in errors ? errors.password.message : ''}
                        />
                        <InputField
                            name='name'
                            errors={errors}
                            register={register}
                            type='text'
                            label='Имя'
                            helperText={'name' in errors ? errors.name.message : ''}
                        />
                        <InputField
                            name='surname'
                            errors={errors}
                            register={register}
                            type='text'
                            label='Фамилия'
                            helperText={'surname' in errors ? errors.surname.message : ''}
                        />
                        <InputField
                            name='surname'
                            errors={errors}
                            register={register}
                            type='text'
                            label='Фамилия'
                            helperText={'surname' in errors ? errors.surname.message : ''}
                        />
                        <TextField
                            autoFocus
                            inputRef={register}
                            error={'phone' in errors}
                            helperText={'phone' in errors ? errors.phone.message : ''}
                            margin='dense'
                            name='phone'
                            label='Номер'
                            type='text'
                            fullWidth
                            InputProps={{
                                inputComponent: PhoneMask as any,
                            }}
                        />

                        <Autocomplete
                            options={Roles}
                            getOptionLabel={option => option.value}
                            getOptionSelected={(option, value) => option === value}
                            disableClearable
                            renderInput={params => <TextField {...params} required={true} label='Роль' />}
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

export default NewUserDialog;
