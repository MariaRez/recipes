import "./Recipe.css";
import taco from "../../images/recipes/taco.jpeg";
import NavTab from "../NavTab/NavTab";

function Recipe() {
  return (
    <section className="recipe section">
      <NavTab title={"Рецепт"} />
      <div className="recipe-container">
        <img
          className="recipe-image"
          src={taco}
          alt="Тако с растительным фаршом"
        />
        <h2 className="recipe-title">Тако с растительным фаршем</h2>
        <p className="recipe-description">
          Когда не хватает времени на долгую готовку, можно использовать
          ингредиенты, предполагающие быстрое приготовление конечного блюда.
          Одно из таких решения для меня — наличие дома упаковки с тортильями
          или иных подходящих лепешок. Из них можно за 10-15 минут приготовить
          полноценный ужин. Например, тако. Мой вариант с растительным мясом -
          вегетарианский, но вы можете использовать, например, говяжий фарш.
        </p>
        <div className="nutrition">
          <h4 className="nutrition__title">КБЖУ</h4>
          <p className="nutrition__text">Рецепт рассчитан на <span className="nutrition__text-span">4 порции</span></p>
          <p className="nutrition__text">Каждая порция содержит в себе:</p>
          <p className="nutrition__text">Белок - 18,5 Жиры - 24 Углеводы - 37,9 Пищевые волокна - 5,3 Ккал - 447</p>
        </div>
        <table className="ingredients-table">
          <caption className="ingredients-title">
            Необходимые ингредиенты
          </caption>
          <tbody>
            <tr>
              <td>Небольшие тортильи</td>
              <td>8 шт</td>
            </tr>
            <tr>
              <td>Растительный фарш</td>
              <td>400 г</td>
            </tr>
            <tr>
              <td>Подсолнечное масло</td>
              <td>1 ч. ложка</td>
            </tr>
            <tr>
              <td>Красный лук</td>
              <td>1 шт</td>
            </tr>
            <tr>
              <td>Огурец</td>
              <td>1 шт</td>
            </tr>
            <tr>
              <td>Помидор</td>
              <td>1 шт</td>
            </tr>
            <tr>
              <td>Кинза</td>
              <td>2-3 шт</td>
            </tr>
            <tr>
              <td>Сырный соус</td>
              <td>4 ч. ложки</td>
            </tr>
          </tbody>
        </table>
        <div className="instruction">
          <h3 className="instruction-title">Инструкция по приготовлению</h3>
          <ol className="instruction-list">
            <li className="instruction-list-item">
              На сухой сковороде по 1 минуте с каждой стороны прогреть тортильи,
              после накрыть все полотенцем, чтобы тортильи не засохли;
            </li>
            <li className="instruction-list-item">
              Мелко нарезать красный лук;
            </li>
            <li className="instruction-list-item">
              Добавить на сковородку масло и обжарить фарш с половиной нарезанного
              лука до готовности &#40;примерно 7-10 минут&#41;;
            </li>
            <li className="instruction-list-item">
              Нарезать мелким кубиком помидор и порубить кинзу;
            </li>
            <li className="instruction-list-item">
              Промазать небольшим количеством сырного соуса тортилью;
            </li>
            <li className="instruction-list-item">
              Затем выложить обжаренный фарш, нарезанные овощи &#40;помидор,
              кинза, лук&#41;;
            </li>
            <li className="instruction-list-item">
              Сверху полить сырным соусом и украсить кинзой
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
