import { RolesEnum } from '../enums/RolesEnum';

export interface InputValues {
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    role: RolesEnum;
}