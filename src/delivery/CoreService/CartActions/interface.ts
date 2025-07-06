import {IConnector} from "../../../models/delivery/common/IConnector";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON";
import {ICartItem} from "../../../models/stores/ICart";

export interface ICartActions {
    connector: IConnector
    getCart(): Promise<IApiResult<GetListResponse<ICartItem>>>
    removeFromCart(productId: string): Promise<IApiResult<null>>
    addToCart(productId: string, quantity: number): Promise<IApiResult<void>>
}