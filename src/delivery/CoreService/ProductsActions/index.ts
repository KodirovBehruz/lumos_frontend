import {IProductsActions} from "./interface.ts";
import {IConnector} from "../../../models/delivery/common/IConnector.ts";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON.ts";
import {IProductsResponseContract} from "../../../models/delivery/contracts/IProductsContract.ts";
import {apiRequestWrapper} from "../../../helpers/delivery.ts";
import {HTTP_STATUSES} from "../../../constants/httpStatuses.ts";
import {IQueryContract} from "../../../models/delivery/contracts/IQueryContract";

export class ProductsActions implements IProductsActions {
    connector: IConnector
    constructor(connector: IConnector) {
        this.connector = connector
    }
    getList = async (
        query: IQueryContract,
    ): Promise<IApiResult<GetListResponse<IProductsResponseContract>>> => {
        const params: IQueryContract = {
            ...(query.search && { search: query.search }),
            ...(query.limit && { limit: query.limit }),
            ...(query.page && { page: query.page }),
            discount: query.discount ?? undefined,
            inStock: query.inStock ?? undefined,
            ...(query.maxPrice && { maxPrice: query.maxPrice }),
            ...(query.minPrice && { minPrice: query.minPrice }),
            category: query.category ?? undefined,
            sizeType: query.sizeType ?? undefined,
        }
        return await apiRequestWrapper(
            this.connector.connector.get("/products", { params }),
            HTTP_STATUSES.OK,
        )
    }
    getDiscountList = async (): Promise<IApiResult<IApiResult<IProductsResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("/products/discounts"),
            HTTP_STATUSES.OK,
        )
    }
    getSizeTypesList = async (): Promise<IApiResult<IApiResult<IProductsResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("/products/size_types"),
            HTTP_STATUSES.OK,
        )
    }
    getProductBySlug = async (slug: string): Promise<IApiResult<GetListResponse<IProductsResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get(`products/${slug}`),
            HTTP_STATUSES.OK,
        )
    }
    getAlsoBuyingProducts = async (slug: string): Promise<IApiResult<IApiResult<IProductsResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get(`products/also-buy/${slug}`),
            HTTP_STATUSES.OK,
        )
    }
}