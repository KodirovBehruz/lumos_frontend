import styles from "./index.module.scss"
import {ICart} from "./interface";
import {FC} from "react";
import {Icon} from "../../atoms/Icon";
import {cartStore} from "../../../store/cart";


export const CartCard: FC<ICart> = ({ data }) => {
    const { removeFromCart, loading } = cartStore()
    return (
        <div className={styles.product}>
            <div className={styles.product_item}>
                <div className={styles.product_item_image}>
                    <img src={data?.images?.length ? `http://127.0.0.1:80${data?.images[0]}` : "Данные недоступны"} alt=""/>
                </div>
                <div className={styles.product_item_text}>
                    <p>{data?.text}</p>
                </div>
                <div className={styles.product_item_quantity}>
                    <p>{data?.quantity}</p>
                </div>
                <div className={styles.product_item_price}>
                    {data?.discount ? (
                        <>
                            <div className={styles.productPrice}><s>{data?.price}$</s></div>
                            <div className={styles.productPrice}>{data?.finalPrice}$</div>
                        </>
                    ) : (
                        <div className={styles.productPrice}>{data?.price}$</div>
                    )}
                </div>
                <div className={styles.product_item_buttons}>
                    <div className={styles.deleteButton} onClick={() => !loading && removeFromCart(data.id)}>
                        <Icon name='trash' />
                    </div>
                    <div className={styles.favoriteButton}>
                        <Icon name='favorite'/>
                    </div>
                </div>
            </div>
        </div>
    )
}