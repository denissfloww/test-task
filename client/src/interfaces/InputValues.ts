import { RolesEnum } from '../enums/RolesEnum';

export interface InputValues {
    email: string;
    name: string;
    password: string;
    surname: string;
    number: string;
    role: RolesEnum;
}