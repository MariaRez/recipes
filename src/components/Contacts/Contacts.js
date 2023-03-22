import "./Contacts.css";
import main from "../../images/contacts/main.jpeg";
import NavTab from "../NavTab/NavTab";

function Contacts() {
  function handleSubmit(evt) {
    evt.preventDefault();
    // написать функцию отправки сообщения от пользователя
  }

  return (
    <section className="section">
      <NavTab title={"Контакты"} />
      <div className="contacts">
        <img
          src={main}
          alt="Главное изображение на странице Контакты"
          className="contacts-main-image"
        ></img>
        <span className="contacts-text">Напишите мне</span>
        <h3 className="contacts-title">У вас есть что сказать мне?</h3>
        <p className="contacts-description">
          Отправьте мне сообщение ниже, и я обязательно свяжусь с вами, как
          только смогу. Спасибо!
        </p>
        <form className="contacts-form" name="contact" onSubmit={handleSubmit}>
          <fieldset className="contacts-fieldset">
            <label className="contacts-label" htmlFor="name">
              Имя
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Напишите ваше имя здесь"
              required
              minLength="2"
              maxLength="30"
              className="contacts-input"
            />
            <span className="input-status"></span>
          </fieldset>
          <fieldset className="contacts-fieldset">
            <label className="contacts-label" htmlFor="email">
              Почта
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Напишите вашу почту здесь"
              pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
              required
              minLength="2"
              maxLength="50"
              className="contacts-input"
            />
            <span className="input-status"></span>
          </fieldset>
          <fieldset className="contacts-fieldset contacts-fieldset_size_big">
            <label className="contacts-label" htmlFor="message">
              Сообщение
            </label>
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Напишите ваше сообщение"
              required
              minLength="2"
              maxLength="1000"
              className="contacts-input contacts-input_size_big"
            />
            <span className="input-status"></span>
          </fieldset>
          <button
            type="submit"
            aria-label="Отправить сообщение"
            className="contacts-button"
          >
            Отправить сообщение
          </button>
          <button
            type="reset"
            aria-label="Очистить"
            className="contacts-button"
          >
            Очистить форму
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
