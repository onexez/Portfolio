import React from "react";
import styles from "./About.module.scss";
import prog from "../about/About-pic/prog.png";
import about from "../about/About-pic/about-img.webp";
import text from "../about/About-pic/text.svg";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="About">
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about_content}>
            <div className={styles.img_side}>
              <img className={styles.work_emoji} src={prog} alt="" />
              <img className={styles.img_side__main_img} src={about} alt="" />
              <span>
                <img className={styles.img_rotate} src={text} alt="" />
              </span>
            </div>
            <div className={styles.text_side}>
              <h3>Обо мне</h3>
              <h4>
                Добро пожаловать в мой мир <br />
                веб-разработки!
              </h4>
              <p>
                Привет! Меня зовут Дима, и я - фронтенд разработчик с огромным вдохновением и
                страстью к созданию удивительных веб-сайтов. Мой опыт включает в себя работу с
                современными технологиями и фреймворками, а также стремление к постоянному обучению
                и улучшению.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
