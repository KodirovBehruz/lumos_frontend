import styles from "./index.module.scss"
import {cartStore} from "../../../store/cart";
import {Button} from "../../atoms/Button";


export const CartTotal = () => {
    const totalPrice = cartStore((state) => state.totalPrice);
    return (
        <div className={styles.info_item}>
            <div className={styles.info_item_quantity}>
                <p>Товаров в корзине: <span>22 шт</span></p>
            </div>
            <div className={styles.info_item_price}>
                <p>Итого: <span>{totalPrice}</span></p>
            </div>
            <Button className={styles.info_item_button}>Очистить корзину</Button>
        </div>
    )
}