import React from 'react';
import './Contacts.css';
import main from '../../images/contacts/main.jpeg';
import NavTab from '../NavTab/NavTab';

function Contacts() {
  function handleSubmit(evt) {
    evt.preventDefault();
    // написать функцию отправки сообщения от пользователя
  }

  function handleReset(evt) {
    evt.preventDefault();
    // написать функцию очистки полей
  }

  return (
    <section className="section">
      <NavTab title="Контакты" />
      <div className="contacts section">
        <img
          src={main}
          alt="Главное изображение на странице Контакты"
          className="contacts-main-image"
        />
        <h4 className="contacts-text dark-color-text medium-text small-letter-spacing upper-text">
          Напишите мне
        </h4>
        <h3 className="contacts-title dark-color-text big-text">
          У вас есть что сказать мне?
        </h3>
        <p className="contacts-description dark-color-text small-text">
          Отправьте мне сообщение ниже, и я обязательно свяжусь с вами, как
          только смогу. Спасибо!
        </p>
        <form className="contacts-form" name="contact">
          <fieldset className="contacts-fieldset">
            <label
              htmlFor="name"
              className="contacts-label
              dark-color-text
              small-text"
            >
              Имя
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Напишите ваше имя здесь"
                required
                minLength="2"
                maxLength="30"
                className="contacts-input small-text small-border-radius"
              />
            </label>
            <span className="input-status small-text" />
          </fieldset>
          <fieldset className="contacts-fieldset">
            <label
              htmlFor="email"
              className="contacts-label small-text"
            >
              Почта
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Напишите вашу почту здесь"
                pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
                required
                minLength="2"
                maxLength="50"
                className="contacts-input small-text small-border-radius"
              />
            </label>
            <span className="input-status small-text" />
          </fieldset>
          <fieldset className="contacts-fieldset contacts-fieldset_size_big">
            <label
              className="contacts-label small-text"
              htmlFor="message"
            >
              Сообщение
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder="Напишите ваше сообщение"
                required
                minLength="2"
                maxLength="1000"
                className="contacts-input contacts-input_size_big small-text small-border-radius"
              />
            </label>
            <span className="input-status small-text input-status_last" />
          </fieldset>
          <button
            type="submit"
            aria-label="Отправить сообщение"
            className="contacts-button active-element dark-color-text medium-text small-letter-spacing upper-text"
            onSubmit={handleSubmit}
          >
            Отправить сообщение
          </button>
          <button
            type="button"
            aria-label="Очистить"
            className="contacts-button active-element dark-color-text medium-text small-letter-spacing upper-text"
            onClick={handleReset}
          >
            Очистить форму
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
