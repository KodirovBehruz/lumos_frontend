import React, {FC} from "react";
import styles from "./index.module.scss"

interface ICheckboxProps {
    checked: boolean,
    disabled?: boolean,
    onChange: (checked: boolean) => void,
    children?: React.ReactNode,
    className?: string,
    key?: string
}

export const Checkbox: FC<ICheckboxProps> = ({checked, disabled = false, onChange, children, key}) => {
    const handleClick = () => {
        if (!disabled) {
            onChange(!checked)
        }
    }
    return (
        <div
            className={`${styles.checkbox} ${checked ? styles.checked : ""} ${disabled ? styles.disabled : ""}`}
            role='checkbox'
            onClick={handleClick}
        >
            <div className={styles.indicator}>
                <div></div>
            </div>
            <div className={styles.label}>{children}</div>
        </div>
    )
}