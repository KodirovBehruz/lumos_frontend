export interface IUserRegisterContract {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export interface IUserLoginContract {
    email: string;
    password: string;
}

export interface IUserResponseContract {
    id: string
    createdAt: string
    username: string
    email: string
    phoneNumber: string
    role: string
}