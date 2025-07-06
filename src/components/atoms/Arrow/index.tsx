import React, { FC } from 'react';
import {IArrowProps} from "./interface";


export const Arrow: FC<IArrowProps> = ({ name, style, className }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        arrow: (
            <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" style={style}>
                <path
                    d="M6.58579 11.6565L8 10.2423L3.75736 5.99963L8 1.75699L6.58579 0.342773L0.928932 5.99963L6.58579 11.6565Z"
                    fill="currentColor" />
            </svg>
        ),
    };

    return (
        <span className={className} style={{transform: "rotate(180deg)"}}>
            {iconMap[name]}
        </span>
    );
};
