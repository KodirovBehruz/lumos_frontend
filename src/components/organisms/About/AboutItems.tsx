import {IAboutItems} from "./About.ts";
import {FC} from "react";
import styles from "./About.module.scss";
import {Button} from "../../atoms/Button";
import {Icon} from "../../atoms/Icon";
import {Link} from "react-router-dom";

export const AboutItems: FC<IAboutItems> = ({icon, text, button_text}) => {
    return (
        <div className={styles.about_item}>
            <img src={icon} alt={icon} className={styles.about_item_icon} />
            <p className={styles.about_item_text}>{text}</p>
            {button_text && (
                <Link to='/catalog'>
                    <Button className={styles.about_item_button}>
                        <Icon name='catalogIcon' className={styles.button_icon} />
                        <span>{button_text}</span>
                    </Button>
                </Link>
            )}
        </div>
    )
}