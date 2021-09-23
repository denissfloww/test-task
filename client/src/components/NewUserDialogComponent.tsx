import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RolesEnum } from '../enums/RolesEnum';
import PhoneMask from './PhoneMask';
import InputField from './InputField';
import { IUser } from '../interfaces/IUser';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    handleInsert: (user:IUser) => void;
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
    number: yup
        .string()
        .required('Заполните это поле!')
        .matches(/^7\([1-9]+\)\s\d+-\d{4}$/, 'Введите корректный формат телефона'),
});

const NewUserDialog = (props: DialogProps) => {
    const { handleClose, open, handleInsert } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [role, setRole] = useState(0)
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const roleEnumValues = Object.keys(RolesEnum).filter(
        k =>
            typeof RolesEnum[k as any] === "number"
    );
    const roleEnumKeys = roleEnumValues.map(k => RolesEnum[k as any]);
    const handleInsertUser = (values: InputValues) => {
        const user: IUser = {
            email: values.email,
            password:values.password,
            name: values.name,
            surname: values.surname,
            number: values.number,
            role: role,
            id: null
        };
        console.log(user)
        handleInsert(user);
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
                            value={email}
                            setValue={setEmail}
                            label='Email'
                            helperText={'email' in errors ? errors.email.message : ''}
                        />
                        <InputField
                            name='password'
                            errors={errors}
                            register={register}
                            type='password'
                            value={password}
                            setValue={setPassword}
                            label='Пароль'
                            helperText={'password' in errors ? errors.password.message : ''}
                        />
                        <InputField
                            name='name'
                            errors={errors}
                            register={register}
                            type='text'
                            value={name}
                            setValue={setName}
                            label='Имя'
                            helperText={'name' in errors ? errors.name.message : ''}
                        />
                        <InputField
                            name='surname'
                            errors={errors}
                            register={register}
                            value={surname}
                            setValue={setSurname}
                            type='text'
                            label='Фамилия'
                            helperText={'surname' in errors ? errors.surname.message : ''}
                        />
                        <TextField
                            inputRef={register}
                            error={'number' in errors}
                            helperText={'number' in errors ? errors.number.message : ''}
                            margin='dense'
                            name='number'
                            value={number}
                            onChange={(e: any) => {
                                setNumber(e.target.value);
                            }}
                            label='Номер'
                            type='text'
                            fullWidth
                            InputProps={{
                                inputComponent: PhoneMask as any,
                            }}
                        />

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={role}
                            required
                            onChange={(e: any) => {
                                console.log(e.target.value)
                                setRole(e.target.value)
                            }}
                        >
                            {roleEnumKeys.map((key: number) => (
                                <MenuItem value={key}>{roleEnumValues[key]}</MenuItem>
                            ))}
                        </Select>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Назад
                    </Button>
                    <Button type='submit' color='secondary'>
                        Добавить
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default NewUserDialog;
