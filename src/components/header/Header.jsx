import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.header}>
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
      </ul>
    </nav>
  );
};
