import React, { FC, useRef } from "react";
import styles from "./index.module.scss";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {IProducts} from "./interface";
import {ProductCard} from "../../ProductsCard";
import {Icon} from "../../../atoms/Icon";


interface CardSliderProps {
    products: IProducts[];
    title: string;
}

export const CardSlider: FC<CardSliderProps> = ({ title, products }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
            <div className={styles.navigation}>
                {/*<button ref={prevRef} className={styles.prev}>*/}
                {/*    <Icon name="arrow"/>*/}
                {/*</button>*/}
                {/*<button ref={nextRef} className={styles.next}>*/}
                {/*    <Icon name="arrow" style={{transform: "rotate(180deg)"}}/>*/}
                {/*</button>*/}
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.wrapper}>
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    slidesPerView={3}
                    spaceBetween={40}
                    loop
                    autoplay={{delay: 3000}}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    className={styles.carousel}
                    breakpoints={{
                        320: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3}
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide>
                            <ProductCard data={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};