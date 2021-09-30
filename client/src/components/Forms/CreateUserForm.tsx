import NumberField from '../Fields/NumberField';
import RoleSelect from '../Fields/RoleSelect';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputValues } from '../../interfaces/InputValues';
import { convertInputValuesToUser } from '../../utils/helperFunctions';
import { insertUser } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';

const validationSchema = yup.object({
    email: yup.string().required('Заполните это поле!'),
    password: yup.string().required('Заполните это поле!').min(8, 'Должно быть не менее 8 символов'),
    name: yup.string().required('Заполните это поле!'),
    surname: yup.string().required('Заполните это поле!'),
});

interface IFormProps {
    handleClose: () => void;
}

const CreateUserForm = (props: IFormProps) => {
    const { handleClose } = props;
    const [number, setNumber] = useState('');
    const [role, setRole] = useState(0);
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
            surname: '',
        },
    });
    const inputs = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            helperText: 'email' in errors ? errors.email?.message : '',
            required: true,
        },
        {
            name: 'password',
            type: 'password',
            label: 'Пароль',
            helperText: 'password' in errors ? errors.password?.message : '',
            required: true,
        },
        {
            name: 'name',
            type: 'text',
            label: 'Имя',
            helperText: 'name' in errors ? errors.name?.message : '',
            required: true,
        },
        {
            name: 'surname',
            type: 'text',
            label: 'Фамилия',
            helperText: 'surname' in errors ? errors.surname?.message : '',
            required: true,
        },
    ];
    const handleInsertUser = (values: InputValues) => {
        values.role = role;
        values.number = number;
        const user = convertInputValuesToUser(values);
        dispatch(insertUser(user));
        handleClose();
    };

    return (
        <form onSubmit={handleSubmit(handleInsertUser)}>
            {inputs.map(value => (
                <TextField
                    inputRef={register}
                    required={value.required}
                    name={value.name}
                    error={value.name in errors}
                    helperText={value.helperText}
                    label={value.label}
                    type={value.type}
                    fullWidth
                />
            ))}
            <NumberField register={register} setNumber={setNumber} number={number} />
            <RoleSelect setRole={setRole} role={role} />
            <div>
                <Button onClick={handleClose} color='primary'>
                    Назад
                </Button>
                <Button type='submit' color='secondary'>
                    Добавить
                </Button>
            </div>
        </form>
    );
};

export default CreateUserForm;
