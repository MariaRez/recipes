import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const location = useLocation();
    return (
    <nav className='navigation'>
        <Link className={`navigation-link  ${location.pathname === "/main" ? "navigation-link_checked" : ""}`} to='/main'>Главная</Link>
        <Link className={`navigation-link  ${location.pathname === "/about" ? "navigation-link_checked" : ""}`} to='/about'>О проекте</Link>
        <Link className={`navigation-link  ${location.pathname === "/categories" ? "navigation-link_checked" : ""}`} to='/categories'>Категории</Link>
        <Link className={`navigation-link  ${location.pathname === "/contacts" ? "navigation-link_checked" : ""}`} to='/contacts'>Контакты</Link>
    </nav>
    );
  }
  
  export default Navigation;
