import styles from "./index.module.scss";
import {Button} from "../../atoms/Button";
import {Icon} from "../../atoms/Icon";
import {Link} from "react-router-dom";
import ScrollToSection from "../../atoms/ScrollToSection.tsx";
import SearchField from "../../atoms/SearchField";
import {useEffect, useState} from "react";
import {ROUTES} from "../../../constants/routing";


export const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY]);
    return (
        <header className={`${styles.header} ${!isVisible && styles.hidden}`}>
            <div className={styles.container}>
                <nav className={styles.header_info}>
                    <div className={styles.header_info_address}>
                        <Icon name='marker' className={styles.addressIcon}/>
                        <p>г.Вахдат ул.Лохути-27</p>
                    </div>
                    <ul className={styles.header_info_list}>
                        <li className={styles.listLink}>
                            <ScrollToSection sectionId="about-section">Информация</ScrollToSection>
                        </li>
                        <li className={styles.listLink}>
                            <ScrollToSection sectionId="about-section">Доставка и оплата</ScrollToSection>
                        </li>
                        <li className={styles.listLink}>
                            <ScrollToSection sectionId="about-section">Блог</ScrollToSection>
                        </li>
                        <li className={styles.listLink}>
                            <ScrollToSection sectionId="discounts-section">Акции</ScrollToSection>
                        </li>
                        <li className={styles.listLink}>
                            <ScrollToSection sectionId="reviews-section">Отзывы</ScrollToSection>
                        </li>
                        <li className={styles.listLink}>
                            <ScrollToSection sectionId="faq-section">FAQ</ScrollToSection>
                        </li>
                    </ul>
                    <div className={styles.header_info_clock}>
                        <Icon name='clock' className={styles.clockIcon}/>
                        <p>пн-сб 10:00 - 19:00</p>
                    </div>
                </nav>
                <nav className={styles.header_action}>
                    <Link to='/'>
                        <div className={styles.header_action_logo}>
                            <Icon name='logoBlack' />
                        </div>
                    </Link>
                    <div className={styles.header_action_fields}>
                        <Link to={ROUTES.CATALOG}>
                            <Button>
                                <Icon name='burger' className={styles.catalogButton}/>
                                <span>Каталог</span>
                            </Button>
                        </Link>
                        <div className={styles.searchField}>
                            <SearchField/>
                        </div>
                        <Link to={ROUTES.LOGIN} className={styles.actionItem}>
                            <Icon name='user' className={styles.actionIcon}/>
                            <span>Аккаунт</span>
                        </Link>
                        <Link to={ROUTES.FAVORITES} className={styles.actionItem}>
                            <Icon name='favorite' className={styles.actionIcon}/>
                            <span>Избранное</span>
                        </Link>
                        <Link to={ROUTES.CART} className={styles.actionItem}>
                            <Icon name='cart' className={styles.actionIcon}/>
                            <span>Корзина</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}