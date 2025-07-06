import React, {FC, useEffect} from "react";
import styles from "./index.module.scss"
import {useMessage} from "../../../hooks/useMessages";
import {useGetFaq} from "../../../hooks/API/Faq/useGetFaq";
import {FaqsCard} from "../../molecules/FaqsCard/index.tsx";
import {Spin} from "antd";


export const Faq: FC = () => {
    const { error: showError } = useMessage()
    const { result, loading: isLoading, execute: getList } = useGetFaq({
        onError: () => showError("Ошибка при получении faq")
    })

    useEffect(() => {
        getList()
    }, [])
    const faq = result?.data || []

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin size="large"/>
            </div>
        );
    }

    return (
        <section id='faq-section' className={styles.faq_section}>
            <div className={styles.container}>
                <h2 className={styles.common_title}>Вопросы & Ответы</h2>
                {faq.length === 0 && <p>faq не найдены</p>}
                {faq.map((faq) => (
                    <FaqsCard key={faq.id} data={faq} />
                ))}
            </div>
        </section>
    )
}