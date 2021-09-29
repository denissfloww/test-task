import DialogContentText from '@material-ui/core/DialogContentText';
import { MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserPayLoad } from '../../types';
import NumberField from '../Fields/NumberField';
import RoleSelect from '../Fields/RoleSelect';
import { InputValues } from '../../interfaces/InputValues';
import { getRoleEnumKeys, getRoleEnumValues } from '../../utils/helperFunctions';

interface EditFormProps {
    handleClose: () => void;
    userData: UserPayLoad;
}

const validationSchema = yup.object({
    email: yup.string().required('Заполните это поле!'),
    name: yup.string().required('Заполните это поле!'),
    surname: yup.string().required('Заполните это поле!'),
});

const EditForm = (props: EditFormProps) => {
    const { userData, handleClose } = props;
    const [number, setNumber] = useState(userData.number);
    const [role, setRole] = useState(userData.role);
    const { register, handleSubmit, errors, control } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: userData.email,
            name: userData.name,
            surname: userData.surname,
            role: userData.role
        },
    });

    const handleUpdateUser = (values: any) => {
        console.log('ggg');
        console.log(values)
        // const user = convertInputValuesToUser(values);
        // dispatch(updateUser(user));
        //handleClose();
    };

    const inputsAttr = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            helperText: 'email' in errors ? errors.email?.message : '',
        },
        {
            name: 'name',
            type: 'text',
            label: 'Имя',
            helperText: 'name' in errors ? errors.name?.message : '',
        },
        {
            name: 'surname',
            type: 'text',
            label: 'Фамилия',
            helperText: 'surname' in errors ? errors.surname?.message : '',
        },
    ]

    const roleEnumValues = getRoleEnumValues();
    const roleEnumKeys = getRoleEnumKeys(roleEnumValues);

    return (
        <form onSubmit={handleSubmit(handleUpdateUser)}>
                {inputsAttr.map(value => (
                    <TextField
                        inputRef={register}
                        name={value.name}
                        error={value.name in errors}
                        helperText={value.helperText}
                        label={value.label}
                        type={value.type}
                        fullWidth
                    />
                ))}
                <NumberField register={register} setNumber={setNumber} number={number} />
           <RoleSelect setRole={setRole} role={role}/>


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

export default EditForm;
