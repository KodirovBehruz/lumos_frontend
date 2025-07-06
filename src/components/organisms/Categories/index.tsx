import styles from "./index.module.scss"
import React, {FC, useEffect} from "react";
import {useMessage} from "../../../hooks/useMessages";
import {useGetCategories} from "../../../hooks/API/Categories/useGetCategories";
import {CategoriesCard} from "../../molecules/CategoriesCard";
import {Arrow} from "../../atoms/Arrow";
import {Spin} from "antd";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../constants/routing";

export const Categories: FC = () => {
    const { error: showError } = useMessage()
    const { result, loading: isLoading, execute: getCategories } = useGetCategories({
        onError: () => showError("Ошибка при получении категорий")
    })
    useEffect(() => {
        getCategories()
    }, [])
    const categories = result?.data || []

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin size="large"/>
            </div>
        );
    }

    return (
        <section className={styles.categories}>
            <div className={styles.container}>
                <Link to={ROUTES.CATEGORIES} className={styles.categories_title}>
                    <h1 className={styles.title}>Популярные категории</h1>
                    <Arrow name="arrow" className={styles.titleArrow} />
                </Link>
                <div className={styles.categories_items}>
                    {Array.isArray(categories) && categories.length === 0 && <p>Категории не найдены</p>}
                    {Array.isArray(categories) && categories.map((category) => (
                        <CategoriesCard key={category.id} categories={category} />
                    ))}
                </div>
            </div>
        </section>
    )
}
