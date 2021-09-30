import { UserPayLoad } from '../../types';
import { TextField } from '@material-ui/core';
import React from 'react';
import { RolesEnum } from '../../enums/RolesEnum';

interface IFormProps {
    userData: UserPayLoad;
}

const UserInfoForm = (props: IFormProps) => {
    const { userData } = props;
    const inputValues = [
        {
            value: userData.email,
            label: 'Email',
        },
        {
            value: userData.name,
            label: 'Имя',
        },
        {
            value: userData.surname,
            label: 'Фамилия',
        },
        {
            value: userData.number,
            label: 'Номер телефона',
        },
        {
            value: RolesEnum[userData.role],
            label: 'Роль',
        },
    ];
    return (
        <div>
            {inputValues.map(val => (
                <TextField value={val.value} disabled label={val.label} fullWidth />
            ))}
        </div>
    );
};

export default UserInfoForm;
