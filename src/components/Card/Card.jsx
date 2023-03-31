import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({
  cardTitle,
  cardDescription,
  to,
  image,
}) {
  return (
    <Link
      className="card medium-border-radius"
      to={to}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card__overlay medium-border-radius" />
      <h3 className="card__title white-color-text medium-text small-letter-spacing">
        {cardTitle}
      </h3>
      <p className="card__description white-color-text small-text">
        {cardDescription}
      </p>
    </Link>
  );
}

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
