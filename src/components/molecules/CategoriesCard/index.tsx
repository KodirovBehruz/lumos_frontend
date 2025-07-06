import {FC} from "react";
import {ICategories} from "./interface";
import styles from "./index.module.scss"

export const CategoriesCard: FC<ICategories> = ({ categories, key }) => {
    return (
        <div className={styles.category_item}>
            <div className={styles.category_item_image}>
                <img src={`http://127.0.0.1:80${categories?.image}`} alt=""/>
            </div>
            <div className={styles.category_item_name}>
                <p>{categories?.name}</p>
            </div>
        </div>
    )
}