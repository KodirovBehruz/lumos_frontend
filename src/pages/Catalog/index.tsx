import React, { FC } from "react";
import styles from "./index.module.scss";
import "antd/dist/reset.css";
import { Icon } from "../../components/atoms/Icon";
import { Spin, Pagination } from "antd";
import { ProductCard } from "../../components/molecules/ProductsCard";
import { CatalogFilters } from "../../components/molecules/CatalogFilters";
import { useCatalog } from "../../hooks/API/Products/useCatalog";

export const CatalogPage: FC = () => {
    const {
        products,
        categories,
        sizeTypes,
        isLoading,
        page,
        limit,
        total,
        onPageChange,
        filters,
        handleFilterChange,
        resetFilters,
    } = useCatalog();

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <section className={styles.catalog_page}>
            <div className={styles.container}>
                <div className={styles.catalog_content}>
                    <CatalogFilters
                        filters={filters}
                        categories={categories}
                        sizeTypes={sizeTypes}
                        onFilterChange={handleFilterChange}
                        onResetFilters={resetFilters}
                        onSizeTypeChange={(value) => handleFilterChange("sizeType", value)}
                        onCategoryChange={(value) => handleFilterChange("category", value)}
                    />
                    <div className={styles.catalog_items}>
                        {products.length === 0 && (
                            <div className={styles.empty}>
                                <Icon name="empty" className={styles.emptyIcon} />
                            </div>
                        )}
                        {products.map((product) => (
                            <ProductCard data={product} key={product.id} />
                        ))}
                        <Pagination
                            rootClassName={styles.pagination}
                            hideOnSinglePage
                            total={total}
                            pageSize={limit}
                            current={page}
                            onChange={onPageChange}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
