import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab({ title }) {
  return (
    <div className="nav-tab">
      <Link className="nav-tab-main-link" to="/">
        На главную
      </Link>
      <h2 className="nav-tab-title">{title}</h2>
    </div>
  );
}

export default NavTab;
