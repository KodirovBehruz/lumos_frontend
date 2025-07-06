import {IAuthActions} from "./interface";
import {IConnector} from "../../../models/delivery/common/IConnector";
import {IApiResult} from "../../../models/delivery/common/IResultJSON";
import {IAuthResponseContract} from "../../../models/delivery/contracts/IAuthContract";
import {apiRequestWrapper} from "../../../helpers/delivery";
import {
    IUserLoginContract,
    IUserRegisterContract,
    IUserResponseContract
} from "../../../models/delivery/contracts/IUserContracts";
import {HTTP_STATUSES} from "../../../constants/httpStatuses";

export class AuthActions implements IAuthActions {
    connector: IConnector
    constructor(connector: IConnector) {
        this.connector = connector;
    }
    refreshToken = async (refreshToken: string): Promise<IApiResult<IAuthResponseContract>> => {
        return await apiRequestWrapper(
            this.connector.connector.post("/auth/refresh-token/", refreshToken),
            HTTP_STATUSES.OK,
        )
    }
    register = async (data: IUserRegisterContract): Promise<IApiResult<IAuthResponseContract>> => {
        return await apiRequestWrapper(
            this.connector.connector.post("auth/register", data),
            HTTP_STATUSES.CREATED,
        )
    }
    login = async (data: IUserLoginContract): Promise<IApiResult<IAuthResponseContract>> => {
        return await apiRequestWrapper(
            this.connector.connector.post("auth/login", data),
            HTTP_STATUSES.OK,
        )
    }
    getSelf = async (): Promise<IApiResult<IUserResponseContract>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("auth/self"),
            HTTP_STATUSES.OK,
        )
    }
}