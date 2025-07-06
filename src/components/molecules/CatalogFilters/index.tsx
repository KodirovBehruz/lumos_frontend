import React, { FC } from "react";
import { Button, Radio, Switch } from "antd";
import { PriceFilter } from "../../atoms/PriceFilter";
import { IProductFiltersProps } from "./interface";
import styles from "./index.module.scss";


export const CatalogFilters: FC<IProductFiltersProps> = ({
     filters,
     onFilterChange,
     onCategoryChange,
     onSizeTypeChange,
     categories,
     sizeTypes,
     onResetFilters,
}) => {
    return (
        <aside className={styles.catalog_filters}>
            <div className={styles.catalog_filters_inStock}>
                <Switch
                    checked={filters.inStock || false}
                    onChange={() => onFilterChange("inStock", !(filters.inStock || false))}
                />
                <span>Только в наличии</span>
            </div>
            <div className={styles.catalog_filters_discount}>
                <Switch
                    checked={filters.discount || false}
                    onChange={() => onFilterChange("discount", !(filters.discount || false))}
                />
                <span>Только со скидкой</span>
            </div>
            <div className={styles.catalog_filters_price}>
                <span className={styles.filterTitle}>Стоимость</span>
                <PriceFilter
                    minPrice={filters.minPrice}
                    maxPrice={filters.maxPrice}
                    onPriceChange={(key, value) => onFilterChange(key, value)}
                />
            </div>
            <div className={styles.catalog_filters_categories}>
                <span className={styles.filterTitle}>Категории</span>
                <Radio.Group
                    onChange={(e) => onCategoryChange(e.target.value)}
                    value={filters.category}
                    className={styles.radioGroup}
                >
                    {categories.map((category) => (
                        <Radio key={category} value={category.id}>
                            <span className={styles.radioLabel}>{category.name}</span>
                        </Radio>
                    ))}
                </Radio.Group>
            </div>
            <div className={styles.catalog_filters_sizeType}>
                <span className={styles.filterTitle}>Тип размера</span>
                <Radio.Group
                    onChange={(e) => onSizeTypeChange(e.target.value)}
                    value={filters.sizeType}
                    className={styles.radioGroup}
                >
                    {sizeTypes.map((sizeType) => (
                        <Radio key={sizeType} value={sizeType}>
                            <span className={styles.radioLabel}>{sizeType}</span>
                        </Radio>
                    ))}
                </Radio.Group>
            </div>
            <Button
                type="default"
                onClick={onResetFilters}
                className={styles.catalog_filters_resetButton}
            >
                Сбросить фильтры
            </Button>
        </aside>
    );
};