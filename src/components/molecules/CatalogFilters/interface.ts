import {IQueryContract} from "../../../models/delivery/contracts/IQueryContract";

export interface IProductFiltersProps {
    filters: IQueryContract,
    onFilterChange: (key: keyof IQueryContract, value: any) => void,
    onCategoryChange: (value: string) => void
    onSizeTypeChange: (value: string) => void
    categories: Array<{ id: string, name: string }>
    sizeTypes: string[]
    onResetFilters: () => void
}