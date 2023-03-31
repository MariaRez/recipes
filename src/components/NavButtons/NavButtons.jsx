import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavButtons.css';
import back from '../../images/icons/back-left.svg';
import top from '../../images/icons/top.svg';

function NavButtons() {
  const navigate = useNavigate();

  return (
    <div className="nav-buttons">
      <button
        type="button"
        className="nav-buttons__item"
        onClick={() => navigate(-1)}
      >
        <img src={back} alt="Назад" title="Вернуться назад" />
      </button>
      <a href="#top">
        <img
          src={top}
          alt="Наверх"
          title="Наверх страницы"
          className="nav-buttons__item"
        />
      </a>
    </div>
  );
}

export default NavButtons;
