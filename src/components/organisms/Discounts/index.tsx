import React, {FC, useEffect} from "react";
import styles from "./index.module.scss"
import {ProductCard} from "../../molecules/ProductsCard";
import {useMessage} from "../../../hooks/useMessages";
import {useGetDiscountProducts} from "../../../hooks/API/Products/useGetDiscountProducts";
import {Arrow} from "../../atoms/Arrow";
import {Spin} from "antd";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../constants/routing";

export const Discounts: FC = () => {
    const { error: showError } = useMessage()
    const { result, loading: isLoading, execute: getList} = useGetDiscountProducts({
        onError: () => showError("Ошибка при получении скидочных товаров")
    })
    useEffect(() => {
        getList()
    }, [])
    const discounts = result?.data || []

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin size="large"/>
            </div>
        );
    }
    return (
        <section id='discounts-section' className={styles.discount_section}>
            <div className={styles.container}>
                <Link to={ROUTES.CATALOG} className={styles.discounts_title}>
                    <h1 className={styles.title}>Лучшие предложения</h1>
                    <Arrow name="arrow" className={styles.titleArrow} />
                </Link>
                <div className={styles.discount_items}>
                    {discounts.length === 0 && <p>Товары не найдены</p>}
                    {discounts.map((discount) => (
                        <ProductCard key={discount.id} data={discount} />
                    ))}
                </div>
            </div>
        </section>
    )
}