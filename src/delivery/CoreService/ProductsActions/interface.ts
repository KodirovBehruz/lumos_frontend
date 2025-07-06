import {IConnector} from "../../../models/delivery/common/IConnector.ts";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON.ts";
import {IProductsResponseContract} from "../../../models/delivery/contracts/IProductsContract.ts";
import {IQueryContract} from "../../../models/delivery/contracts/IQueryContract";

export interface IProductsActions {
    connector: IConnector
    getList(query: IQueryContract): Promise<IApiResult<GetListResponse<IProductsResponseContract>>>
    getDiscountList(): Promise<IApiResult<GetListResponse<IProductsResponseContract>>>
    getSizeTypesList(): Promise<IApiResult<GetListResponse<IProductsResponseContract>>>
    getProductBySlug(slug: string): Promise<IApiResult<GetListResponse<IProductsResponseContract>>>
    getAlsoBuyingProducts(slug: string): Promise<IApiResult<IApiResult<IProductsResponseContract>>>
}