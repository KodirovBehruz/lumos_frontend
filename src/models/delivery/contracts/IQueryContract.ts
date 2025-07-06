export interface IQueryContract {
    offset?: number
    limit?: number
    page?: number
    search?: string | null
    discount?: boolean
    inStock?: boolean
    maxPrice?: number
    minPrice?: number
    category?: string
    sizeType?: string
}