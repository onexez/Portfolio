import React from "react";
import { styles } from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about_content}>
          <div className={styles.img_side}>
            <img
              className={styles.work_emoji}
              src="src\components\about\About-pic\prog.png"
              alt=""
            />
            <img
              className={styles.img_side__main_img}
              src="src\components\about\About-pic\about-img.62b47e7f183d4b4e9feb.webp"
              alt=""
            />
            <span>
              <img
                className={styles.img_rotate}
                src="src\components\about\About-pic\text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt=""
              />
            </span>
          </div>
          <div className={styles.text_side}>
            <h3>About Me</h3>
            <h4>
              Добро пожаловать в мой мир <br />
              веб-разработки!
            </h4>
            <p>
              Привет! Меня зовут Дима, и я - фронтенд разработчик с огромным вдохновением и страстью
              к созданию удивительных веб-сайтов. Мой опыт включает в себя работу с современными
              технологиями и фреймворками, а также стремление к постоянному обучению и улучшению.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
