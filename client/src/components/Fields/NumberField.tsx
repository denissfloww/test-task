import { TextField } from '@material-ui/core';
import React from 'react';

import NumberInputMask from './NumberInputMask';

interface INumberFieldProps {
    register: any;
    setNumber: (value: ((prevState: any) => any) | any) => void;
    number: string;
}

const NumberField = (props: INumberFieldProps) => {
    const { register, setNumber, number } = props;

    return (
        <TextField
            inputRef={register}
            margin='dense'
            name='number'
            id='number'
            value={number}
            onChange={e => {
                setNumber(e.target.value);
            }}
            label='Номер'
            type='text'
            fullWidth
            InputProps={{
                inputComponent: NumberInputMask as any,
            }}
        />
    );
};

export default NumberField;
