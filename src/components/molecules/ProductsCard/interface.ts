import {IProductsResponseContract} from "../../../models/delivery/contracts/IProductsContract.ts";

export interface IProducts {
    data: IProductsResponseContract,
    key?: number
}
