import styles from "./About.module.scss";
import aboutImage from "../../../assets/images/about_images/about_img.png"
import {AboutItems} from "./AboutItems";
import {aboutData} from "./About";

export default function About() {
    return (
        <section id='about-section' className={styles.about_section}>
            <div className={styles.container}>
                <h2 className={styles.common_title}>Почему наша платформа становится <span>выбором #1</span></h2>
                <img src={aboutImage} className={styles.about_image} alt="About-Image"/>
                <div className={styles.about_items}>
                    {aboutData.map((item, index) => (
                        <AboutItems
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            button_text={item.button_text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}