import { Link } from "react-router-dom";
import "./Card.css";

function Card({ cardTitle, cardDescription, to, image }) {
  return (
    <Link
      className="card"
      to={to}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card__overlay"></div>
      <h3 className="card__title">{cardTitle}</h3>
      <p className="card__description">{cardDescription} </p>
    </Link>
  );
}

export default Card;
