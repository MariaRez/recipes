import "./Recipe.css";
import taco from "../../images/recipes/taco.jpeg";
import NavTab from "../NavTab/NavTab";

function Recipe() {
  return (
    <section className="recipe">
      <NavTab title={"Рецепт"} />
      <div className="recipe-container">
        <div className="recipe-content-container">
          <h2 className="recipe-title">Тако с растительным фаршом</h2>
          <div className="recipe-description">
            <img
              className="recipe-image"
              src={taco}
              alt="Тако с растительным фаршом"
            />
            <div>
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
            </div>
          </div>
          <div className="instruction section">
            <span className="instruction-title">
              Инструкция по приготовлению
            </span>
            <ol className="instruction-list">
              <li className="instruction-list-item">
                На сухой сковороде по 1 минуте с каждой стороны прогреть
                тортильи, после накрыть все полотенцем, чтобы тортильи не
                засохли;
              </li>
              <li className="instruction-list-item">
                Добавить на сковородку масло и обжарить фарш 7-10 минут до
                готовности;
              </li>
              <li className="instruction-list-item">
                Нарезать мелким кубиком овощи и порубить кинзу;
              </li>
              <li className="instruction-list-item">
                Промазать небольшим количеством сырного соуса тортилью;
              </li>
              <li className="instruction-list-item">
                Затем выложить обжаренный фарш, нарезанные овощи
              </li>
              <li className="instruction-list-item">
                Сверху полить сырным соусом и украсить кинзой
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
