export interface IPriceFilterProps {
    minPrice?: number
    maxPrice?: number
    onPriceChange?: (key: "minPrice" | "maxPrice", value) => void
}