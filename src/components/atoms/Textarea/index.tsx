import {ITextareaProps} from "./interface.ts";
import {ChangeEvent, FC, useState} from "react";
import styles from "./index.module.scss";

export const Textarea: FC<ITextareaProps> = ({placeholder = "Оставьте ваш отзыв...", onSubmit}) => {
    const [text, setText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        if (text.trim()) {
            onSubmit(text);
            setText("");
        }
    };
    return (
        <div className={styles.textarea_container}>
            <textarea
                className={styles.textarea}
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
            />
            <div className={styles.textarea_controls}>
                <button className={styles.submit_button} onClick={handleSubmit}>
                    Отправить
                </button>
            </div>
        </div>
    )
}