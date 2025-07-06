import {FC} from "react";
import styles from "./index.module.scss";
import {Icon} from "../../atoms/Icon";
import {ROUTES} from "../../../constants/routing";
import {Link} from "react-router-dom";

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_content}>
                    <div className={styles.footer_content_items}>
                        <div className={styles.footer_content_item}>
                            <div className={styles.item_logo}>
                                <Icon name='logoWhite' />
                            </div>
                            <ul className={styles.item_list}>
                                <li>Пн-Пт: с 8:00 до 22:00</li>
                                <li>Сб-Вс: с 9:00 до 19:00</li>
                                <li>Праздники: с 9:00 до 19:00</li>
                            </ul>
                        </div>
                        <div className={styles.footer_content_item}>
                            <h2 className={styles.item_title}>КОНТАКТЫ</h2>
                            <ul className={styles.item_list}>
                                <li>+992902569900</li>
                                <li>info@lumos.tj</li>
                                <li>Instagram</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                        <div className={styles.footer_content_item}>
                            <h2 className={styles.item_title}>ИНФОРМАЦИЯ</h2>
                            <ul className={styles.item_list}>
                                <li>О платформе</li>
                                <li>Контакты</li>
                                <li>Производители</li>
                                <li>Отзывы</li>
                                <li>Гарантии</li>
                            </ul>
                        </div>
                        <div className={styles.footer_content_item}>
                            <h2 className={styles.item_title}>КЛИЕНТАМ</h2>
                            <ul className={styles.item_list}>
                                <li>Войти</li>
                                <Link to={ROUTES.CART}>
                                    <li>Корзина</li>
                                </Link>
                                <li>Избранное</li>
                                <li>Политика конфиденциальности</li>
                                <li>Сервисные центры</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer_rights}>
                        <p>© 2023-2024 Lumos. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}