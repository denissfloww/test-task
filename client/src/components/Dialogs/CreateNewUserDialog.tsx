import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../Fields/InputField';
import { InputValues } from '../../interfaces/InputValues';
import { convertInputValuesToUser } from '../../utils/helperFunctions';
import RoleSelect from '../Fields/RoleSelect';
import { insertUser } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import NumberField from '../Fields/NumberField';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
}

const validationSchema = yup.object({
    email: yup.string().required('Заполните это поле!'),
    password: yup.string().required('Заполните это поле!').min(8, 'Должно быть не менее 8 символов'),
    name: yup.string().required('Заполните это поле!'),
    surname: yup.string().required('Заполните это поле!'),
});

const CreateNewUserDialog = (props: DialogProps) => {
    const { handleClose, open } = props;
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [role, setRole] = useState(0);
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });
    const handleInsertUser = (values: InputValues) => {
        values.role = role;
        values.number = number;
        const user = convertInputValuesToUser(values);
        dispatch(insertUser(user));
        handleClose();
    };

    const inputs = [
        {
            name: 'email',
            type: 'email',
            value: email,
            setValue: setEmail,
            label: 'Email',
            helperText: 'email' in errors ? errors.email.message : '',
        },
        {
            name: 'password',
            type: 'password',
            value: password,
            setValue: setPassword,
            label: 'Пароль',
            helperText: 'password' in errors ? errors.password.message : '',
        },
        {
            name: 'name',
            type: 'text',
            value: name,
            setValue: setName,
            label: 'Имя',
            helperText: 'name' in errors ? errors.name.message : '',
        },
        {
            name: 'surname',
            type: 'text',
            value: surname,
            setValue: setSurname,
            label: 'Фамилия',
            helperText: 'surname' in errors ? errors.surname.message : '',
        },
    ];

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <form onSubmit={handleSubmit(handleInsertUser)}>
                <DialogTitle id='alert-dialog-title'>{'Добавление нового пользователя'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {inputs.map(value => (
                            <InputField
                                name={value.name}
                                errors={errors}
                                register={register}
                                type={value.type}
                                value={value.value}
                                setValue={value.setValue}
                                label={value.label}
                                helperText={value.helperText}
                            />
                        ))}
                        <NumberField register={register} setNumber={setNumber} number={number} />
                        <RoleSelect setRole={setRole} role={role} />
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

export default CreateNewUserDialog;
