import "./Main.css";
import glass from "../../images/main/glass.jpg";
import bread from "../../images/main/bread-and-eggs.jpg";
import sky from "../../images/main/sky.jpg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main section">
      <div className="main__image-container">
        <img className="main__image" alt="В ресторане" src={glass}></img>
        <img className="main__image" alt="Готовим дома" src={bread}></img>
        <img className="main__image" alt="Кочели" src={sky}></img>
      </div>
      <h4 className="main-text">Давайте познакомимся</h4>
      <h3 className="main-title">Всем привет! Меня зовут Мария и я фуд-блогер</h3>
      <h5 className="main-description">
        Считаю что еду нужно любить и почитать, а готовить лучшее занятие на
        планете
      </h5>
      <Link className="about-link" to="/about">Читать далее</Link>
      <h4 className="main-text">Избранные рецепты</h4>
      <p>Будут добавлены позже &#128105;&#8205;&#128187;</p>
      <h4 className="main-text">Последние рецепты</h4>
      <p>Будут добавлены позже &#128105;&#8205;&#128187;</p>
    </main>
  );
}

export default Main;
