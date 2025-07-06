import {IIconProps} from "../../atoms/Icon/interface.ts";

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

export interface IAboutProps {
    icon: string
    text: string
    button_text?: string
}

export interface IAboutItems {
    icon: IIconProps,
    text: string,
    button_text?: string,
    key?: number
}


import about1 from "../../../assets/images/about_images/about_1.png"
import about2 from "../../../assets/images/about_images/about_2.png"
import about3 from "../../../assets/images/about_images/about_3.png"
import about4 from "../../../assets/images/about_images/about_4.png"

export const aboutData: IAboutItems[] = [
    {
        icon: about1,
        text: "Наша платформа сэкономит вам время, предоставляя удобный поиск и фильтрацию по нужным параметрам.",
    },
    {
        icon: about2,
        text: "Мы стремимся помочь создать уютную атмосферу с помощью качественного освещения и стильного дизайна.",
    },
    {
        icon: about3,
        text: "Доказанный путь к быстрому и удобному выбору идеальных люстр для любого интерьера.",
    },
    {
        icon: about4,
        text: "Более 100 видов люстр и светильников.",
        button_text: "Перейти в каталог",
    },
];
