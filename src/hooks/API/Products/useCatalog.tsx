import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { IQueryContract } from "../../../models/delivery/contracts/IQueryContract";
import { useDebounce } from "../../useDebounce";
import { useGetProducts } from "./useGetProducts";
import { useGetCategories } from "../Categories/useGetCategories";
import { useGetSizeTypes } from "./useGetSizeTypes";
import { useMessage } from "../../useMessages";

export const useCatalog = () => {
    const { error: showError } = useMessage();
    const [query, setQuery] = useSearchParams();
    const initialPage = useMemo(() => Number(query.get("page")) || 1, [query]);
    const initialLimit = useMemo(() => Number(query.get("limit")) || 6, [query]);
    const [page, setPage] = useState<number>(initialPage);
    const [limit, setLimit] = useState<number>(initialLimit);
    const { result, loading: isProductsLoading, execute: getProducts } = useGetProducts({
        onError: () => showError("Ошибка при получении товаров")
    });
    const { result: categoriesResult, loading: isCategoriesLoading, execute: getCategories } = useGetCategories({
        onError: () => showError("Ошибка при получении категорий")
    });
    const { result: sizeTypesResult, loading: isSizeTypesLoading, execute: getSizeTypes } = useGetSizeTypes({
        onError: () => showError("Ошибка при получении типов размеров")
    });
    const parseFiltersFromQuery = (queryParams: URLSearchParams): IQueryContract => ({
        discount: queryParams.get("discount") === "true" ? true : undefined,
        inStock: queryParams.get("inStock") === "true" ? true : undefined,
        inverse: queryParams.get("inverse") === "true" ? true : undefined,
        maxPrice: queryParams.has("maxPrice") ? parseFloat(queryParams.get("maxPrice")!) : undefined,
        minPrice: queryParams.has("minPrice") ? parseFloat(queryParams.get("minPrice")!) : undefined,
        category: queryParams.get("category") || undefined,
        sizeType: queryParams.get("sizeType") || undefined,
        search: queryParams.get("search") || ""
    });
    const [filters, setFilters] = useState<IQueryContract>(() => parseFiltersFromQuery(query));
    useEffect(() => {
        const newFilters = parseFiltersFromQuery(query);
        let isDifferent = false;
        for (const key in newFilters) {
            if (newFilters[key as keyof IQueryContract] !== filters[key as keyof IQueryContract]) {
                isDifferent = true;
                break;
            }
        }
        if (isDifferent) {
            setFilters(newFilters);
        }
    }, [query]);

    const debouncedFilters = useDebounce(filters, 500);
    useEffect(() => {
        if (page !== 1) {
            setPage(1);
        }
    }, [debouncedFilters])

    useEffect(() => {
        getCategories();
        getSizeTypes();
    }, []);

    const lastQueryStringRef = useRef<string>("");
    useEffect(() => {
        const params = new URLSearchParams();
        Object.entries(debouncedFilters).forEach(([key, value]) => {
            if (value !== undefined && value !== false && value !== "") {
                params.set(key, String(value));
            }
        });
        params.set("page", String(page));
        params.set("limit", String(limit));
        const newQueryString = params.toString();
        if (newQueryString !== lastQueryStringRef.current) {
            setQuery(params);
            lastQueryStringRef.current = newQueryString;
        }
        getProducts({
            ...debouncedFilters,
            page,
            limit
        });
    }, [debouncedFilters, page, limit]);

    const onPageChange = (newPage: number, pageSize: number) => {
        setPage(newPage);
        setLimit(pageSize);
    };

    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev) => {
            const updatedFilters = { ...prev, [key]: value };
            if (value === null || value === undefined || value === false || value === "") {
                delete updatedFilters[key];
            }
            return updatedFilters;
        });
    };

    const resetFilters = () => {
        setFilters({});
        setPage(1);
        setLimit(6);
        const params = new URLSearchParams();
        params.set("page", "1");
        params.set("limit", "6");
        setQuery(params);
    };

    return {
        products: result?.data || [],
        total: result?.meta?.count || 0,
        categories: categoriesResult?.data || [],
        sizeTypes: sizeTypesResult?.data || [],
        isLoading: isProductsLoading || isCategoriesLoading || isSizeTypesLoading,
        page,
        limit,
        onPageChange,
        filters,
        handleFilterChange,
        resetFilters,
    };
};
