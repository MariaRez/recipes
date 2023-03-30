import { Link } from "react-router-dom";
import "./Card.css";

function Card({ cardTitle, cardDescription, to, image }) {
  return (
    <Link
      className="card medium-border-radius"
      to={to}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card__overlay medium-border-radius"></div>
      <h3 className="card__title white-color-text medium-text small-letter-spacing">
        {cardTitle}
      </h3>
      <p className="card__description white-color-text small-text">
        {cardDescription}{" "}
      </p>
    </Link>
  );
}

export default Card;
