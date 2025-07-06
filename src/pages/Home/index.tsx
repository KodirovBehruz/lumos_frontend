import styles from "./index.module.scss";
import { Carousel } from "../../components/molecules/Sliders/HomeSlider";
import { sliderData } from "../../assets/content/content.js";

export default function HomePage() {
    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.homeCarousel}>
                    <Carousel data={sliderData} />
                </div>
            </div>
        </section>
    );
}
