import {IFaqActions} from "./interface";
import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {apiRequestWrapper} from "../../../helpers/delivery";
import {HTTP_STATUSES} from "../../../constants/httpStatuses";
import {IFaqResponseContract} from "../../../models/delivery/contracts/IFaqContract";

export class FaqActions implements IFaqActions {
    connector: IConnector
    constructor(connector: IConnector) {
        this.connector = connector;
    }
    getList = async (): Promise<IApiResult<GetListResponse<IFaqResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("faq/"),
            HTTP_STATUSES.OK,
        )
    }
}