import {ICategoriesActions} from "./interface";
import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {ICategoriesResponseContract} from "../../../models/delivery/contracts/ICategoriesContract";
import {apiRequestWrapper} from "../../../helpers/delivery";
import {HTTP_STATUSES} from "../../../constants/httpStatuses";

export class CategoriesActions implements ICategoriesActions {
    connector: IConnector
    constructor(connector: IConnector) {
        this.connector = connector;
    }
    getList = async (): Promise<IApiResult<GetListResponse<ICategoriesResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("categories/"),
            HTTP_STATUSES.OK,
        )
    }
}