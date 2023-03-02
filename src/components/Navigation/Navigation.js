import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const location = useLocation();
    return (
    <nav className='navigation'>
        <Link className={`navigation-link  ${location.pathname === "/main" ? "navigation-link_checked" : ""}`} to='/main'>Главная</Link>
        <Link className={`navigation-link  ${location.pathname === "/about" ? "navigation-link_checked" : ""}`} to='/about'>О проекте</Link>
        <div className='categories'>
            <span className="categories-title">Категории</span>
            <ul className="categories__list">
              <li><Link className='categories__item' to='/breakfast'>Завтрак</Link></li>
              <hr className='horizontal-line-in-nav'/>
              <li><Link className='categories__item'>Обед</Link></li>
              <hr className='horizontal-line-in-nav'/>
              <li><Link className='categories__item'>Ужин</Link></li>
              <hr className='horizontal-line-in-nav'/>
              <li><Link className='categories__item'>Перекус</Link></li>
            </ul>
        </div>
        <Link className={`navigation-link  ${location.pathname === "/contacts" ? "navigation-link_checked" : ""}`} to='/contacts'>Контакты</Link>
    </nav>
    );
  }
  
  export default Navigation;
