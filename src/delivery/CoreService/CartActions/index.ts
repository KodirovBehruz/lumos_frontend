import {ICartActions} from "./interface";
import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {apiRequestWrapper} from "../../../helpers/delivery";
import {ICartItem} from "../../../models/stores/ICart";
import {HTTP_STATUSES} from "../../../constants/httpStatuses";

export class CartActions implements ICartActions {
    connector: IConnector
    constructor(connector: IConnector) {
        this.connector = connector
    }
    getCart = async (): Promise<IApiResult<GetListResponse<ICartItem>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get(`cart/`),
            HTTP_STATUSES.OK,
        )
    }
    removeFromCart = async (productId: string): Promise<IApiResult<null>> => {
        return await apiRequestWrapper(
            this.connector.connector.delete(`cart/${productId}`),
            HTTP_STATUSES.NO_CONTENT,
        )
    }
    addToCart = async (productId: string, quantity: number): Promise<IApiResult<void>> => {
        return await apiRequestWrapper(
            this.connector.connector.post(`cart/`, { productId, quantity })
        )
    }
}