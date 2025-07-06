import {IProductsResponseContract} from "../../../../models/delivery/contracts/IProductsContract";

export interface IProducts {
    data: IProductsResponseContract,
    key?: number
}