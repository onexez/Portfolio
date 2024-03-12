import { Link } from "react-scroll";
import "./Burgermenu.scss";

export const BurgerMenu = ({ toggleMenu, isActive, setIsActive }) => {
  console.log(isActive);
  const mobileNav = "mobile_nav";
  return (
    <div className={`${mobileNav} ${toggleMenu}`}>
      <span>
        <svg
          onClick={() => setIsActive(!isActive)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="tabler-icon tabler-icon-x"
        >
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </span>
      <ul>
        <li>
          <Link onClick={() => setIsActive(!isActive)} to="Header" smooth={true} duration={100}>
            Главная
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsActive(!isActive)} to="About" smooth={true} duration={100}>
            Обо мне
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsActive(!isActive)} to="Projects" smooth={true} duration={100}>
            Проекты
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsActive(!isActive)} to="Contacts" smooth={true} duration={100}>
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};
