import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateUserPassword } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

interface InputValues {
    password: string;
    confirmation: string;
}

interface IFormProps {
    id: number;
    handleErrorOpen: (text: string) => void;
    handleClose: () => void;
}

const validationSchema = yup.object({
    password: yup.string().required('Заполните это поле!'),
    confirmation: yup.string().required('Заполните это поле!'),
});

const ChangePasswordForm = (props: IFormProps) => {
    const { id, handleErrorOpen, handleClose } = props;
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            password: '',
            confirmation: '',
        },
    });
    const handlePasswordChange = ({ password, confirmation }: InputValues) => {
        if (password !== confirmation) {
            handleErrorOpen('Пароли не совпадают!');
        } else {
            dispatch(updateUserPassword(id, password));
            handleClose();
        }
    };

    return (
        <form onSubmit={handleSubmit(handlePasswordChange)}>
            <TextField
                autoFocus
                inputRef={register}
                error={'password' in errors}
                helperText={'password' in errors ? errors.password?.message : ''}
                margin='dense'
                name='password'
                label='Новый пароль'
                type='password'
                fullWidth
            />
            <TextField
                inputRef={register}
                error={'confirmation' in errors}
                helperText={'confirmation' in errors ? errors.confirmation?.message : ''}
                margin='dense'
                name='confirmation'
                label='Подтвердите пароль'
                type='password'
                fullWidth
            />
            <div>
                <Button onClick={handleClose} color='primary'>
                    Отмена
                </Button>
                <Button type='submit' color='secondary'>
                    Изменить
                </Button>
            </div>
        </form>
    );
};

export default ChangePasswordForm;
