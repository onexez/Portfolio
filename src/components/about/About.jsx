import React from 'react';
import styles from './About.module.scss';

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
              A dedicated Front-end Developer <br />
              based in Belgrade, Serbia 📍
            </h4>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
