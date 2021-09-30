import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserPayLoad } from '../../types';
import NumberField from '../Fields/NumberField';
import RoleSelect from '../Fields/RoleSelect';
import { convertInputValuesToUser } from '../../utils/helperFunctions';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/usersSlice';
import { InputValues } from '../../interfaces/InputValues';

interface IFormProps {
    handleClose: () => void;
    userData: UserPayLoad;
}

const validationSchema = yup.object({
    email: yup.string().required('Заполните это поле!'),
    name: yup.string().required('Заполните это поле!'),
    surname: yup.string().required('Заполните это поле!'),
});

const EditUserForm = (props: IFormProps) => {
    const { userData, handleClose } = props;
    const [number, setNumber] = useState(userData.number);
    const [role, setRole] = useState(userData.role);
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: userData.email,
            name: userData.name,
            surname: userData.surname,
            role: userData.role,
        },
    });

    const handleUpdateUser = (values: InputValues) => {
        values.role = role;
        values.number = number;
        values.password = userData.password;
        const user = convertInputValuesToUser(values);
        user.id = userData.id
        dispatch(updateUser(user));
        handleClose();
    };

    const inputsAttr = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            helperText: 'email' in errors ? errors.email?.message : '',
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

    return (
        <form onSubmit={handleSubmit(handleUpdateUser)}>
            {inputsAttr.map(value => (
                <TextField
                    inputRef={register}
                    name={value.name}
                    required={value.required}
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
                    Закрыть
                </Button>
                <Button type='submit' color='secondary'>
                    Изменить
                </Button>
            </div>
        </form>
    );
};

export default EditUserForm;
