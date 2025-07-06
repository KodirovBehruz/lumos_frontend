import {ICoreService} from "./interface.ts";
import {IConnector} from "../../models/delivery/common/IConnector.ts";
import {IProductsActions} from "./ProductsActions/interface.ts";
import {ApiConnector} from "../../helpers/connector.ts";
import {ProductsActions} from "./ProductsActions";
import {IReviewsActions} from "./ReviewsActions/interface";
import {ReviewsActions} from "./ReviewsActions";
import {IFaqActions} from "./FaqActions/interface";
import {FaqActions} from "./FaqActions";
import {CategoriesActions} from "./CategoriesActions";
import {ICategoriesActions} from "./CategoriesActions/interface";
import {IAuthActions} from "./AuthActions/interface";
import {AuthActions} from "./AuthActions";
import {ICartActions} from "./CartActions/interface";
import {CartActions} from "./CartActions";

export class CoreService implements ICoreService {
    connector: IConnector
    productsActions: IProductsActions
    categoriesActions: ICategoriesActions
    reviewsActions: IReviewsActions
    faqActions: IFaqActions
    authActions: IAuthActions
    cartActions: ICartActions

    constructor() {
        this.connector = new ApiConnector("/api")
        this.productsActions = new ProductsActions(this.connector)
        this.categoriesActions = new CategoriesActions(this.connector)
        this.reviewsActions = new ReviewsActions(this.connector)
        this.faqActions = new FaqActions(this.connector)
        this.authActions = new AuthActions(this.connector)
        this.cartActions = new CartActions(this.connector)
    }
}