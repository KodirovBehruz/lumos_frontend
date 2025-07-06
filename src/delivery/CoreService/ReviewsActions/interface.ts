import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {IReviewsResponseContract} from "../../../models/delivery/contracts/IReviewsContract";


export interface IReviewsActions {
    connector: IConnector;
    getList(): Promise<IApiResult<GetListResponse<IReviewsResponseContract>>>
}