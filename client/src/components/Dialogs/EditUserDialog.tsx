// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';
import { DialogTitle } from '@material-ui/core';
// import InputField from '../Fields/InputField';
// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch } from 'react-redux';
// import { updateUser } from '../../redux/slices/usersSlice';
// import RoleSelect from '../Fields/RoleSelect';
// import NumberField from '../Fields/NumberField';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    userId: number;
}

// const validationSchema = yup.object({
//     email: yup.string().required('Заполните это поле!'),
//     password: yup.string().required('Заполните это поле!').min(8, 'Должно быть не менее 8 символов'),
//     name: yup.string().required('Заполните это поле!'),
//     surname: yup.string().required('Заполните это поле!'),
// });

const EditUserDialog = (props: DialogProps) => {
    const { handleClose, open, userId} = props;
    console.log(userId);
    // const { register, handleSubmit, errors } = useForm({
    //     mode: 'onChange',
    //     resolver: yupResolver(validationSchema),
    // });
    // const dispatch = useDispatch();
    // const [email, setEmail] = useState(user.email);
    // const [password, setPassword] = useState(user.password);
    // const [name, setName] = useState(user.name);
    // const [surname, setSurname] = useState(user.surname);
    // const [number, setNumber] = useState(user.number);
    // const [role, setRole] = useState(user.role);

    // const handleUpdateUser = () => {
    //     const editUser: IUser = {
    //         email: email,
    //         password: password,
    //         name: name,
    //         surname: surname,
    //         number: number,
    //         role: role,
    //         id: user.id,
    //     };
    //
    //     dispatch(updateUser(editUser));
    // };

    return (

        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{userId}</DialogTitle>
            {/*<form onSubmit={handleSubmit(handleUpdateUser)}>*/}
            {/*    <DialogTitle id='alert-dialog-title'>{'Добавление нового пользователя'}</DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <DialogContentText>*/}
            {/*            <InputField*/}
            {/*                name='email'*/}
            {/*                errors={errors}*/}
            {/*                register={register}*/}
            {/*                type='email'*/}
            {/*                value={email}*/}
            {/*                setValue={setEmail}*/}
            {/*                label='Email'*/}
            {/*                helperText={'email' in errors ? errors.email.message : ''}*/}
            {/*            />*/}
            {/*            <InputField*/}
            {/*                name='password'*/}
            {/*                errors={errors}*/}
            {/*                register={register}*/}
            {/*                type='password'*/}
            {/*                value={password}*/}
            {/*                setValue={setPassword}*/}
            {/*                label='Пароль'*/}
            {/*                helperText={'password' in errors ? errors.password.message : ''}*/}
            {/*            />*/}
            {/*            <InputField*/}
            {/*                name='name'*/}
            {/*                errors={errors}*/}
            {/*                register={register}*/}
            {/*                type='text'*/}
            {/*                value={name}*/}
            {/*                setValue={setName}*/}
            {/*                label='Имя'*/}
            {/*                helperText={'name' in errors ? errors.name.message : ''}*/}
            {/*            />*/}
            {/*            <InputField*/}
            {/*                name='surname'*/}
            {/*                errors={errors}*/}
            {/*                register={register}*/}
            {/*                value={surname}*/}
            {/*                setValue={setSurname}*/}
            {/*                type='text'*/}
            {/*                label='Фамилия'*/}
            {/*                helperText={'surname' in errors ? errors.surname.message : ''}*/}
            {/*            />*/}
            {/*            <NumberField register={register} setNumber={setNumber} number={number} />*/}
            {/*            <RoleSelect setRole={setRole} role={role} />*/}
            {/*        </DialogContentText>*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button onClick={handleClose} color='primary'>*/}
            {/*            Назад*/}
            {/*        </Button>*/}
            {/*        <Button type='submit' color='secondary'>*/}
            {/*            Изменить*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</form>*/}
        </Dialog>
    );
};

export default EditUserDialog;
