import {IReviewsActions} from "./interface";
import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {IReviewsResponseContract} from "../../../models/delivery/contracts/IReviewsContract";
import {apiRequestWrapper} from "../../../helpers/delivery";
import {HTTP_STATUSES} from "../../../constants/httpStatuses";


export class ReviewsActions implements IReviewsActions {
    connector: IConnector;
    constructor(connector: IConnector) {
        this.connector = connector;
    }
    getList = async (): Promise<IApiResult<GetListResponse<IReviewsResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("reviews/"),
            HTTP_STATUSES.OK,
        )
    }
}