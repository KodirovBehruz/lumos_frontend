import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {ICategoriesResponseContract} from "../../../models/delivery/contracts/ICategoriesContract";

export interface ICategoriesActions {
    connector: IConnector
    getList(): Promise<IApiResult<GetListResponse<ICategoriesResponseContract>>>
}