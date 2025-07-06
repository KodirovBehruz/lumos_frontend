import {FC, useState} from "react";
import { IProducts } from "./interface.ts";
import styles from "./index.module.scss";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routing";
import {cartStore} from "../../../store/cart";

export const ProductCard: FC<IProducts> = ({ data }) => {
    const { items, addToCart, loading } = cartStore()
    const discountedPrice = data.discount ? (data.price * (1 - data.discount / 100)).toFixed(2) : null
    const productInCart = items.some(item => item.id === data.id)
    const handleAddToCart = () => {
        if (!loading) {
            addToCart(data.id, data.quantity)
        }
    }
    return (
        <div className={styles.product_item}>
            <div className={styles.product_item_image}>
                <Icon name="favorite" className={styles.favoriteIcon} />
                {data?.images?.length > 0 ? (
                    <Link to={`${ROUTES.CATALOG}/${data.slug}`}>
                        <img src={`http://127.0.0.1:80${data.images[0]}`} alt="" />
                    </Link>
                ) : (
                    <p>Изображение недоступно</p>
                )}
                {data?.discount && (<div className={styles.discount}>-{data.discount}%</div>)}
            </div>
            <div className={styles.product_item_details}>
                <div className={styles.productText}>
                    <p>{data?.text}</p>
                </div>
            </div>
            <div className={styles.product_item_extra}>
                {data?.discount ? (
                    <>
                        <div className={styles.productPrice}><s>{data?.price}$</s></div>
                        <div className={styles.productPrice}>{discountedPrice}$</div>
                    </>
                ) : (
                    <div className={styles.productPrice}>{data?.price}$</div>
                )}
            </div>
            <div className={styles.product_item_actions}>
                <Button
                    className={`${styles.cartButton} ${productInCart ? styles.active : ""}`}
                    disabled={!data?.inStock}
                    onClick={handleAddToCart}>
                    {productInCart ? "Перейти в корзину" : data?.inStock ? "В корзину" : "Нет в наличии"}
                </Button>
            </div>
        </div>
    );
};
