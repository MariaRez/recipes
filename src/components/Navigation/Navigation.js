import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const location = useLocation();
    return (
    <nav className='navigation'>
        <Link className={`navigation-link  ${location.pathname === "/main" ? "navigation-link_checked" : ""}`} to='/main'>Главная</Link>
        <Link className={`navigation-link  ${location.pathname === "/about" ? "navigation-link_checked" : ""}`} to='/about'>О проекте</Link>
        <Link className={`navigation-link  ${location.pathname === "/contacts" ? "navigation-link_checked" : ""}`} to='/contacts'>Контакты</Link>
        <div className='categories'>
            <span className="categories-title">Категории</span>
            <ul className="categories__list">
              <li className='categories__item categories__item_breakfast'>
                <Link className='categories__item'>Завтрак</Link>
              </li>
              <li className='categories__item categories__item_lunch'>
                <Link className='categories__item'>Обед</Link>
              </li>
              <li className='categories__item categories__item_dinner'>
                <Link className='categories__item'>Ужин</Link>
              </li>
              <li className='categories__item categories__item_snack'>
                <Link className='categories__item'>Перекус</Link>
              </li>
              <li className='categories__item categories__item_all'>
                <Link className='categories__item' to='/all-categories'>Все</Link>
              </li>
            </ul>
        </div>
    </nav>
    );
  }
  
  export default Navigation;
