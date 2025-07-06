import {IUserResponseContract} from "../delivery/contracts/IUserContracts";

export interface IAuth {
    accessToken: string;
    refreshToken: string;
    user: IUserResponseContract
    setTokens: (accessToken: string, refreshToken: string) => void
    setUser: (user: IUserResponseContract) => void
    refresh: () => void
    logout: () => void
    getSelf: () => void
}