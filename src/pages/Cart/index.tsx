import styles from "./index.module.scss"
import {Spin} from "antd";
import React, {useEffect} from "react";
import {CartCard} from "../../components/molecules/CartCard";
import {cartStore} from "../../store/cart";
import {CartTotal} from "../../components/molecules/CartTotal";


export default function Cart() {
    const { items, loading, getCart} = cartStore()
    useEffect(() => {
        getCart()
    }, [])
    if (loading) {
        return (
            <div className={styles.loading}>
                <Spin size="large"/>
            </div>
        );
    }
    return (
        <section className={styles.cart}>
            <div className={styles.container}>
                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>Корзина</h1>
                </div>
                <div className={styles.cartBlock}>
                    <div className={styles.products}>
                        {items.length ? (
                            items.map((product) => <CartCard key={Number(product.id)} data={product}/>)
                        ) : (
                            <p>Корзина пуста</p>
                        )}
                    </div>
                    <div className={styles.info}>
                        <CartTotal />
                    </div>
                </div>
            </div>
        </section>
    )
}