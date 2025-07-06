import styles from "./index.module.scss"
import {FC} from "react";
import {IRadioProps} from "./interface";

export const Radio: FC<IRadioProps> = ({ id, name, label, value, checked, onChange }) => {
    return (
        <div className={styles.radio}>
            <input
                type="radio"
                id={id}
                value={value}
                name={name}
                checked={checked}
                onChange={() => onChange(value)}
                className={styles.radio_input}
            />
            <label htmlFor={id} className={styles.radio_label}>{label}</label>
        </div>
    )
}