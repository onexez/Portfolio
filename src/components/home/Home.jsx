import styles from './home.module.scss';
import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiSass } from 'react-icons/si';

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.text}>
              <h1 className={styles.title}>Junior Front-End Developer</h1>
              <img
                className=""
                src="src\components\home\home-pic\waving.1bae5fcfb51082b5c2b4.png"
                alt="waving_hand"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, numquam. Esse nulla omnis culpa aperiam placeat
                unde totam dicta dolor natus voluptate molestiae, temporibus
                quis ea odio ratione, perferendis dignissimos?
              </p>
              <span className={styles.link}>
                <a aria-label="telegram" href="">
                  <BsTelegram />
                </a>
                <a aria-label="github" href="">
                  <AiFillGithub />
                </a>
              </span>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.skills}>
            <p>Tech Stack</p>
            <div>
              <ul>
                <li>
                  <AiFillHtml5 className={styles.html} />
                </li>
                <li>
                  <DiCss3 className={styles.css} />
                </li>
                <li>
                  <IoLogoJavascript className={styles.js} />
                </li>
                <li>
                  <FaReact className={styles.react} />
                </li>
                <li>
                  <SiTailwindcss className={styles.tailwind} />
                </li>
                <li>
                  <SiSass className={styles.sass} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
