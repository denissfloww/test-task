import { RolesEnum } from '../enums/RolesEnum';

export interface IUser {
    id: number | null;
    email:string;
    password: string;
    name: string;
    surname: string;
    number: string;
    role: RolesEnum
}