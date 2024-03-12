import styles from "./Header.module.scss";
import { Link, Element } from "react-scroll";
import React from "react";

export const Header = ({ isActive, setIsActive }) => {
  return (
    <Element name="Header">
      <nav className={styles.header}>
        <h3 className={styles.title}>Портфолио</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="Header" smooth={true} duration={100}>
              Главная
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="About" smooth={true} duration={100}>
              Обо мне
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="Projects" smooth={true} duration={100}>
              Проекты
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="Contacts" smooth={true} duration={100}>
              Контакты
            </Link>
          </li>
          <li className={styles.mobile_item}>
            <svg
              onClick={() => setIsActive(!isActive)}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>
      </nav>
    </Element>
  );
};
