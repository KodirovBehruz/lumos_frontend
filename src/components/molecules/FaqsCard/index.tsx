import {FC, useState} from "react";
import {IFaq} from "./index.ts";
import styles from "./index.module.scss";

export const FaqsCard: FC<IFaq> = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFaq = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={styles.faq_item}>
            <div className={styles.faq_item_question} onClick={toggleFaq}>
                {data.question}
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className={styles.faq_item_answer}>{data.answer}</div>}
        </div>
    )
}