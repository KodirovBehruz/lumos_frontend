import styles from "./index.module.scss"
import {IPriceFilterProps} from "./interface";
import {FC} from "react";
import {InputNumber} from "antd";

export const PriceFilter: FC<IPriceFilterProps> = ({ minPrice, maxPrice, onPriceChange }) => {
    return (
        <div className={styles.priceFilter}>
            <div className={styles.priceFilter_inputs}>
                <InputNumber
                    className={styles.antInputNumber}
                    placeholder='мин'
                    value={minPrice}
                    onChange={(value) => onPriceChange("minPrice", value)}
                    min={0}
                />
                <InputNumber
                    className={styles.antInputNumber}
                    placeholder='макс'
                    value={maxPrice}
                    onChange={(value) => onPriceChange("maxPrice", value)}
                />
            </div>
        </div>
    )
}