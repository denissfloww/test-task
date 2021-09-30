import React from 'react';
import { IMaskInput } from 'react-imask';

interface ICustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumberInputMask = React.forwardRef<HTMLElement, ICustomProps>(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask='+7(#00)000-0000'
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

export default NumberInputMask;
