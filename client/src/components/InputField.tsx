import { TextField } from '@material-ui/core';
import React from 'react';

interface IProps {
    name: string;
    errors: any;
    register: any;
    type: string;
    label: string;
    helperText: any;
}

const InputField = (props: IProps) => {
    const { errors, register, type, label, helperText, name, ...other } = props;

    return (
        <TextField
            {...other}
            inputRef={register}
            error={name in errors}
            helperText={helperText}
            margin='dense'
            name={name}
            label={label}
            type={type}
            fullWidth
        />
    );
};

export default InputField;
