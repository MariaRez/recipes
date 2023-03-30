import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  return (
    <nav className="navigation">
      <Link
        className={`navigation-link active-element active-element-implicit dark-color-text small-text ${
          location.pathname === "/" ? "active-element_checked" : ""
        }`}
        to="/"
      >
        Главная
      </Link>
      <Link
        className={`navigation-link active-element active-element-implicit dark-color-text small-text ${
          location.pathname === "/about" ? "active-element_checked" : ""
        }`}
        to="/about"
      >
        О проекте
      </Link>
      <Link
        className={`navigation-link active-element active-element-implicit dark-color-text small-text ${
          location.pathname === "/contacts" ? "active-element_checked" : ""
        }`}
        to="/contacts"
      >
        Контакты
      </Link>
      <div className="categories">
        <h3 className="categories-title small-text dark-color-text">
          Категории
        </h3>
        <ul className="categories__list">
          <li className="categories__item small-text categories__item_type_breakfast">
            <Link className="categories__item small-text dark-color-text">
              Завтрак
            </Link>
          </li>
          <li className="categories__item small-text categories__item_type_lunch">
            <Link className="categories__item small-text dark-color-text">
              Обед
            </Link>
          </li>
          <li className="categories__item small-text categories__item_type_dinner">
            <Link className="categories__item small-text dark-color-text">
              Ужин
            </Link>
          </li>
          <li className="categories__item small-text categories__item_type_snack">
            <Link className="categories__item small-text dark-color-text">
              Перекус
            </Link>
          </li>
          <li className="categories__item small-text categories__item_type_all">
            <Link
              className="categories__item small-text dark-color-text"
              to="/all-categories"
            >
              Все
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
