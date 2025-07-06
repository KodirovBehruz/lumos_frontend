import React, {FC, useEffect} from "react";
import {reviewsInfo} from "./interface.ts";
import styles from "./index.module.scss"
import {ReviewsCard} from "../../molecules/ReviewsCard";
import {useMessage} from "../../../hooks/useMessages";
import {useGetReviews} from "../../../hooks/API/Reviews/useGetReviews";
import {Spin} from "antd";
import {Arrow} from "../../atoms/Arrow";
import {ROUTES} from "../../../constants/routing";
import {Link} from "react-router-dom";


export const Reviews: FC = () => {
    const { error: showError } = useMessage()
    const { result, loading: isLoading, execute: getList } = useGetReviews({
        onError: () => showError("Ошибка при получении отзывов")
    })
    useEffect(() => {
        getList()
    }, [])
    const reviews = result?.data || []

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin size="large"/>
            </div>
        );
    }

    return (
        <section id='reviews-section' className={styles.review_section}>
            <div className={styles.container}>
                <div className={styles.review_top_block}>
                    <p className={styles.blockTitle}>Хотите вдохновиться идеями для вашего интерьера? </p>
                    <p className={styles.blockText}>Посмотрите, как наши люстры преображают дома наших клиентов
                        и создают
                        неповторимую атмосферу.</p>
                </div>
                <div className={styles.review_info_items}>
                    {reviewsInfo.map((item, index) => (
                        <div className={styles.infoBlock} key={index}>
                            <h2 className={styles.infoTitle}>{item.info_title}</h2>
                            <p className={styles.infoText}>{item.info_text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.review_card_items}>
                    <Link to={ROUTES.REVIEWS} className={styles.reviewTitle}>
                        <h1 className={styles.title}>Отзывы наших клиентов</h1>
                        <Arrow name="arrow" className={styles.titleArrow}/>
                    </Link>
                    <div className={styles.reviewCards}>
                        {reviews.length === 0 && <p>Отзывы не найдены</p>}
                        {reviews.map((review) => (
                            <ReviewsCard key={review.id} data={review}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}