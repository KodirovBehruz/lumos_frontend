import {IConnector} from "../../../models/delivery/common/IConnector";
import {
    IUserLoginContract,
    IUserRegisterContract,
    IUserResponseContract
} from "../../../models/delivery/contracts/IUserContracts";
import {IApiResult} from "../../../models/delivery/common/IResultJSON";
import {IAuthResponseContract} from "../../../models/delivery/contracts/IAuthContract";

export interface IAuthActions {
    connector: IConnector

    refreshToken(refreshToken: string): Promise<IApiResult<IAuthResponseContract>>
    register(data: IUserRegisterContract): Promise<IApiResult<IAuthResponseContract>>
    login(data: IUserLoginContract): Promise<IApiResult<IAuthResponseContract>>
    getSelf(): Promise<IApiResult<IUserResponseContract>>
}