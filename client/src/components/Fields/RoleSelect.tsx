import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { getRoleEnumKeys, getRoleEnumValues } from '../../utils/helperFunctions';

interface IRoleSelectProps {
    setRole: (value: ((prevState: any) => any) | any) => void;
    role: number;
}

const RoleSelect = (props: IRoleSelectProps) => {
    const {setRole, role} = props;
    const roleEnumValues = getRoleEnumValues();
    const roleEnumKeys = getRoleEnumKeys(roleEnumValues);

    return (
        <Select
            labelId='role-select'
            id='role-select'
            label='Роль'
            name='role'
            value={role}
            required
            onChange={(e) => {
                setRole(e.target.value);
            }}
        >
            {roleEnumKeys.map((key: string) => (
                <MenuItem value={key}>{roleEnumValues[Number(key)]}</MenuItem>
            ))}
        </Select>
    )
}

export default RoleSelect;