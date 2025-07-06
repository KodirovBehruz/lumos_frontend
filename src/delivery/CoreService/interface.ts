import {IConnector} from "../../models/delivery/common/IConnector.ts";
import {IProductsActions} from "./ProductsActions/interface.ts";
import {IReviewsActions} from "./ReviewsActions/interface";
import {IFaqActions} from "./FaqActions/interface";
import {ICategoriesActions} from "./CategoriesActions/interface";
import {IAuthActions} from "./AuthActions/interface";
import {ICartActions} from "./CartActions/interface";

export interface ICoreService {
    connector: IConnector
    productsActions: IProductsActions
    categoriesActions: ICategoriesActions
    reviewsActions: IReviewsActions
    faqActions: IFaqActions
    authActions: IAuthActions
    cartActions: ICartActions
}