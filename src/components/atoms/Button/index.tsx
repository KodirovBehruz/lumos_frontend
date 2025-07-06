import {IButtonProps} from "./interface.ts";
import styles from "./index.module.scss";
import clsx from "clsx"
import { FC, PropsWithChildren } from 'react'

export const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, onClick, className, disabled}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(styles.button, className, { [styles.disabled]: disabled })}
            disabled={disabled}>{children}
        </button>
    )
}
