import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./index.module.scss";
import { Icon } from "../../../atoms/Icon";


export const Carousel = ({ data }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.classList.add(styles.loaded);
    }

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.infoBlock}>
                <h2 className={styles.title}>{data[activeSlideIndex]?.title}</h2>
                <p className={styles.description}>
                    {data[activeSlideIndex]?.description}
                </p>
                <button className={styles.actionButton}>Подробнее</button>
                <div className={styles.pagination}></div>
            </div>
            <button ref={prevRef} className={styles.prev}>
                <Icon name="arrow" />
            </button>
            <button ref={nextRef} className={styles.next}>
                <Icon name="arrow" style={{ transform: "rotate(180deg)" }} />
            </button>

            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    el: `.${styles.pagination}`,
                } as Pagination}
                autoplay={{ delay: 3000 }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                        const navigation = swiper.params.navigation as {
                            prevEl: HTMLElement;
                            nextEl: HTMLElement;
                        };
                        navigation.prevEl = prevRef.current!;
                        navigation.nextEl = nextRef.current!;
                    }
                }}
                onSlideChange={(swiper) => {
                    setActiveSlideIndex(swiper.realIndex);
                }}
                className={styles.carousel}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.image}
                            loading="lazy"
                            onLoad={handleImageLoad}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
