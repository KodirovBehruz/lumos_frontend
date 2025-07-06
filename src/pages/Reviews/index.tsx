import {FC, useEffect, useState} from "react";
import styles from "./index.module.scss";
import {ReviewsCard} from "../../components/molecules/ReviewsCard";
import {Textarea} from "../../components/atoms/Textarea";
import {useMessage} from "../../hooks/useMessages";
import {useGetReviews} from "../../hooks/API/Reviews/useGetReviews";

export const ReviewsPage: FC = () => {
    const { error: showError } = useMessage()
    const { result: reviews = [], loading: isReviewsLoading, execute: getReviews } = useGetReviews({
        onError: () => showError("Ошибка при получении отзывов")
    })
    // const [expandedReview, setExpandedReview] = useState<{ [key: number]: boolean }>({});

    // const renderStars = (rating: number) => {
    //     return "★".repeat(rating).padEnd(5, "☆");
    // };

    // const maxLength = 90;
    // const getShortText = (text: string) => {
    //     return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    // };

    // const toggleExpanded = (index: number) => {
    //     setExpandedReview(prev => ({
    //         ...prev,
    //         [index]: !prev[index]
    //     }));
    // };

    // const handleReviewSubmit = (text: string) => {
    //     console.log("Отправлен отзыв:", text);
    // };

   useEffect(() => {
       getReviews()
   }, [])

    if (isReviewsLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <section id='reviews-section' className={styles.review_section}>
            <div className={styles.container}>
                {/*<div className={styles.review_add}>*/}
                {/*    <Textarea onSubmit={handleReviewSubmit} />*/}
                {/*</div>*/}
                <div className={styles.review_items}>
                    {Array.isArray(reviews) && reviews.length === 0 && <p>Товары не найдены</p>}
                    {Array.isArray(reviews) && reviews.map((review, index) => (
                        <ReviewsCard key={index} reviews={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};
