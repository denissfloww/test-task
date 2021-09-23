import { TextField } from '@material-ui/core';
import React from 'react';

interface IProps {
    name: string;
    errors: any;
    register: any;
    type: string;
    label: string;
    helperText: any;
    value: string;
    setValue: (value: ((prevState: any) => any) | any) => void;
}

const InputField = (props: IProps) => {
    const { errors, register, type, label, helperText, name, value, setValue, ...other } = props;

    return (
        <TextField
            {...other}
            inputRef={register}
            error={name in errors}
            helperText={helperText}
            margin='dense'
            name={name}
            value={value}
            onChange={(e: any) => {
                setValue(e.target.value);
            }}
            label={label}
            type={type}
            fullWidth
        />
    );
};

export default InputField;
