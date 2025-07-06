import {ICartItem} from "../../../models/stores/ICart";

export interface ICart {
    data: ICartItem
    key?: number
}