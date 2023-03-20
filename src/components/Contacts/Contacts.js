import { Link } from "react-router-dom";
import "./Contacts.css";
import main from "../../images/contacts/main.jpeg";

function Contacts() {
  return (
    <section className="section">
      <div className="title-container">
        <Link className="main-link" to="/">
          На главную
        </Link>
        <h2 className="title">Контакты</h2>
      </div>
      <div className="contacts">
        <img
          src={main}
          alt="Главное изображение на странице Контакты"
          className="contacts-main-image"></img>
        <span className="contacts-text">Напишите мне</span>
        <h3 className="contacts-title">У вас есть что сказать мне?</h3>
        <p className="contacts-description">
          Отправьте мне сообщение ниже, и я обязательно свяжусь с вами, как
          только смогу. Спасибо!
        </p>
        <form className="contacts-form" name="contact">
          <fieldset className="contacts-fieldset">
          <label className="contacts-label" htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Напишите ваше имя здесь"
            required
            className="contacts-input"
          />
          </fieldset>
          <fieldset className="contacts-fieldset">
          <label className="contacts-label" htmlFor="email">Почта</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Напишите вашу почту здесь"
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            required
            minLength="2"
            className="contacts-input"
          />
          </fieldset>
          <fieldset className="contacts-fieldset contacts-fieldset_size_big">
          <label className="contacts-label" htmlFor="message">Сообщение</label>
          <input
            id="message"
            type="text"
            name="message"
            placeholder="Напишите ваше сообщение для меня"
            required
            minLength="2"
            className="contacts-input"
          />
          </fieldset>
          <button
            type="submit"
            aria-label="Отправить сообщение"
            className="contacts-button"
          >Отправить сообщение</button>
          <button
            type="reset"
            aria-label="Очистить"
            className="contacts-button"
          >Очистить форму</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
