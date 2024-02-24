import styles from "./Projects.module.scss";
import games from "../projects/projects-pic/games.png";
import site from "../projects/projects-pic/site.png";
import movie from "../projects/projects-pic/movie.png";
import food from "../projects/projects-pic/food.png";
import store from "../projects/projects-pic/store.png";
import todo from "../projects/projects-pic/todo.png";

export const Projects = () => {
  return (
    <section className={styles.project}>
      <div className="container">
        <div className={styles.project_content}>
          <p>Portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className={styles.projects_grid}>
            <div className={styles.project_example}>
              <div className={styles.project_img}>
                <a target="_blank" href="https://onexez.github.io/games/" rel="noreferrer">
                  <img src={games} alt="" />
                </a>
              </div>
              <div className={styles.pro_text}>
                <h3>App-publisher</h3>
                <p>Digital-агентство и GameDev студия</p>
                <div className={styles.stack}>
                  <p>HTML</p>
                  <p>SCSS</p>
                  <p>Vanilla JS</p>
                </div>
                <div className={styles.links}>
                  <a target="_blank" rel="noreferrer" href="https://github.com/onexez/games">
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://onexez.github.io/games/">
                    Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.project_example}>
              <div className={styles.project_img}>
                <a
                  target="_blank"
                  href="https://stalwart-fudge-330544.netlify.app/"
                  rel="noreferrer"
                >
                  <img src={site} alt="" />
                </a>
              </div>
              <div className={styles.pro_text}>
                <h3>Магазин кроссовок</h3>
                <p>Магазин кроссовок с поиском,корзиной и сортировкой</p>
                <div className={styles.stack}>
                  <p>React</p>
                  <p>SCSS</p>
                  <p>Redux</p>
                  <p>TS</p>
                </div>
                <div className={styles.links}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/onexez/reactSneakerShop"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://stalwart-fudge-330544.netlify.app/"
                  >
                    Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project_skill}>
        <div className={styles.project_skill_items}>
          <div className={styles.items_img}>
            <img src={movie} alt="" />
            <h3>Поиск фильмов</h3>
            <div className={styles.img_stack}>
              <p>React</p>
              <p>CSS</p>
            </div>
            <div className={styles.img_links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/onexez/react-movies?tab=readme-ov-file"
              >
                Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
              <a target="_blank" rel="noreferrer" href="https://onexez.github.io/react-movies/">
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                  <path d="M11 13l9 -9"></path>
                  <path d="M15 4h5v5"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.items_img}>
            <img src={food} alt="" />
            <h3>SPA поиск блюд</h3>
            <div className={styles.img_stack}>
              <p>React</p>
              <p>CSS</p>
              <p>React router</p>
            </div>
            <div className={styles.img_links}>
              <a target="_blank" rel="noreferrer" href="https://github.com/onexez/react-food">
                Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
              <a target="_blank" rel="noreferrer" href="https://onexez.github.io/react-food/">
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                  <path d="M11 13l9 -9"></path>
                  <path d="M15 4h5v5"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.items_img}>
            <img src={store} alt="" />
            <h3>Магазин с корзиной</h3>
            <div className={styles.img_stack}>
              <p>React</p>
              <p>CSS</p>
            </div>
            <div className={styles.img_links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/onexez/react-shop?tab=readme-ov-file"
              >
                Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
              <a target="_blank" rel="noreferrer" href="https://onexez.github.io/react-shop/">
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                  <path d="M11 13l9 -9"></path>
                  <path d="M15 4h5v5"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.items_img}>
            <img src={todo} alt="" />
            <h3>Список задач</h3>
            <div className={styles.img_stack}>
              <p>React</p>
              <p>Redux</p>
            </div>
            <div className={styles.img_links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/onexez/ReactTodo/tree/main"
              >
                Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://symphonious-sorbet-5ea7f7.netlify.app/"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                  <path d="M11 13l9 -9"></path>
                  <path d="M15 4h5v5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
