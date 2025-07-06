import {IReviews} from "./interface.ts";
import {FC, useState} from "react";
import styles from "./index.module.scss";
import {Icon} from "../../atoms/Icon";

export const ReviewsCard: FC<IReviews> = ({data}) => {
    return (
        <div className={styles.review_item}>
            <div className={styles.review_item_info}>
                <Icon name="ava" className={styles.authorAva}/>
                <div className={styles.authorData}>
                    <p>{data.author?.username}</p>
                    <p>{data.author?.email}</p>
                </div>
            </div>
            <div className={styles.review_item_content}>
                <div className={styles.review_item_details}>
                    <p className={styles.reviewText}>
                        {data.text}
                    </p>
                </div>
            </div>
        </div>
    )
}