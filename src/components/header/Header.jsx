import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav id="header" className={styles.header}>
      <h3 className={styles.title}>Портфолио</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="">Главная</a>
        </li>
        <li className={styles.item}>
          <a href="">Обо мне</a>
        </li>
        <li className={styles.item}>
          <a href="">Проекты</a>
        </li>
        <li className={styles.item}>
          <a href="">Контакты</a>
        </li>
        <li className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={styles}
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </li>
      </ul>
    </nav>
  );
};
