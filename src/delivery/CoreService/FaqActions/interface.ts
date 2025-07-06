import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {IFaqResponseContract} from "../../../models/delivery/contracts/IFaqContract";

export interface IFaqActions {
    connector: IConnector
    getList(): Promise<IApiResult<GetListResponse<IFaqResponseContract>>>
}