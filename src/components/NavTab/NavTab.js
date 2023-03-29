import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab({ title }) {
  return (
    <div className="nav-tab">
      <Link className="nav-tab-main-link dark-color-text medium-text small-letter-spacing upper-text" to="/">
        На главную
      </Link>
      <h2 className="nav-tab-title green-color-text medium-text small-letter-spacing upper-text">{title}</h2>
    </div>
  );
}

export default NavTab;
