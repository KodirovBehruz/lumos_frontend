import {ICategoriesResponseContract} from "./ICategoriesContract";

export interface IProductsResponseContract {
    id: string
    createdAt: string
    name: string
    text: string
    slug: string
    categoryAssociation: ICategoriesResponseContract
    size_type: string[]
    sizes: {
        name: string;
    }[]
    images: string[]
    discount: number | null
    price: number
    finalPrice: number
    quantity: number
    color: string
    inStock: boolean
}
