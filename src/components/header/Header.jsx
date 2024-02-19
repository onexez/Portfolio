import styles from "./header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <h3 className={styles.title}>Portfolio.dev</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="">Home</a>
        </li>
        <li className={styles.item}>
          <a href="">About</a>
        </li>
        <li className={styles.item}>
          <a href="">Projects</a>
        </li>
        <li className={styles.item}>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
