import React, { FC, useEffect, useState } from "react";
import { IProduct } from "./interface.ts";
import styles from "./index.module.scss";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { useFetch } from "../../../hooks/API/useFetch";
import { useDelivery } from "../../../hooks/API/useDelivery";
import { useMessage } from "../../../hooks/useMessages";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import {CardSlider} from "../Sliders/CardSlider";


export const ProductPage: FC<IProduct> = () => {
    const [isActive, setIsActive] = useState(false);
    const { slug } = useParams<{ slug: string }>();
    const delivery = useDelivery();
    const { error: showError } = useMessage();
    const { result: productData, loading: isLoading, execute: getProduct } = useFetch({
        asyncFunction: delivery.CS.productsActions.getProductBySlug,
        onError: () => showError("Ошибка при получении товара"),
    });
    const { result: alsoBuyData, loading: isAlsoBuyLoading, execute: getAlsoBuyingProducts } = useFetch({
        asyncFunction: delivery.CS.productsActions.getAlsoBuyingProducts,
        onError: () => showError('Ошибка при получении списка "С этим товаром покупают"'),
    });

    const product = productData?.data || {};
    const alsoBuy = alsoBuyData?.data || [];
    const images = product?.images || [];
    const inStock = product?.inStock ?? false;
    const discountedPrice = product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : null;

    useEffect(() => {
        getProduct(slug);
        getAlsoBuyingProducts(slug);
    }, [slug]);

    if (isLoading || isAlsoBuyLoading) {
        return (
            <div className={styles.loading}>
                <Spin size="large" />
            </div>
        );
    }

    const handleAddToCart = () => {
        if (inStock) {
            setIsActive(!isActive);
        }
    };

    return (
        <section className={styles.product_page}>
            <div className={styles.product_page_item}>
                <div className={styles.productImage}>
                    <Icon name="favorite" className={styles.favoriteIcon} />
                    {images.length > 0 ? (
                        <img src={`http://127.0.0.1:80${images[0]}`} alt="" />
                    ) : (
                        <p>Изображение недоступно</p>
                    )}
                    {product?.discount && <div className={styles.discount}>-{product?.discount}%</div>}
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productInfo_details}>
                        <div className={styles.productText}>
                            <p>{product?.text}</p>
                        </div>
                        <div className={styles.productSizes}>
                            <ul>
                                {Array.isArray(product?.sizes) ? (
                                    product.sizes.map((size, index) => <li key={index}>{size} см</li>)) : (
                                    <li>Размеры отсутствуют</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.productInfo_extra}>
                        {product?.discount ? (
                            <>
                                <div className={styles.productPrice}><s>{product?.price}$</s></div>
                                <div className={styles.productPrice}>{discountedPrice}$</div>
                            </>
                        ) : (
                            <div className={styles.productPrice}>{product?.price}$</div>
                        )}
                    </div>
                    <div className={styles.productInfo_actions}>
                        <Button
                            className={`${styles.cartButton} ${isActive ? styles.active : ""}`}
                            disabled={!product?.inStock}
                            onClick={handleAddToCart}
                        >
                            {isActive ? "Перейти в корзину" : product?.inStock ? "В корзину" : "Нет в наличии"}
                        </Button>
                    </div>
                </div>
            </div>
            {alsoBuy.length === 0 ? (
                <div className={styles.empty}>
                    <Icon name="empty" className={styles.emptyIcon} />
                </div>
            ) : (
                <CardSlider products={alsoBuy} title='С этим товаром покупают' />
            )}
        </section>
    );
};