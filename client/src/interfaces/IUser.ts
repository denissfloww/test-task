import { RolesEnum } from '../enums/RolesEnum';

export interface IUser {
    id: number;
    email:string;
    password: string;
    name: string;
    surname: string;
    number: string;
    role: RolesEnum
}