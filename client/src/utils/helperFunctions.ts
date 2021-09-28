import { RolesEnum } from '../enums/RolesEnum';
import { InputValues } from '../interfaces/InputValues';
import { IUser } from '../interfaces/IUser';

export const getRoleEnumValues = () => {
    return Object.keys(RolesEnum).filter(k => typeof RolesEnum[k as any] === 'number');
};

export const getRoleEnumKeys = (roleEnumValues: string[]) => {
    return roleEnumValues.map(k => RolesEnum[k as any]);
};

export const convertInputValuesToUser = (values: InputValues) => {
    const user: IUser = {
        email: values.email,
        password: values.password,
        name: values.name,
        surname: values.surname,
        number: values.number,
        role: values.role,
    };

    return user;
}
