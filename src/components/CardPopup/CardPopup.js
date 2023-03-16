import './CardPopup.css';
import taco from '../../images/recipes/taco.jpeg';

function CardPopup() {
    return (
        <div className='popup'>
            <div className='popup-container'>
                <div className='popup-content-container'>
                  <h2 className='popup-title'>Тако с растительным фаршом</h2>
                  <div className='popup-description'>
                    <img
                    className='popup-image'
                    src={taco} 
                    alt='Тако с растительным фаршом'/>
                    <div>
                      <table className='ingredients-table'>
                        <caption className='ingredients-title'>Необходимые ингредиенты</caption>
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
                  <span className='instruction-title'>Инструкция по приготовлению</span>
                  <ol className='instruction-list'>
                    <li className='instruction-list-item'>На сухой сковороде по 1 минуте с каждой стороны прогреть тортильи, после
                    накрыть все полотенцем, чтобы тортильи не засохли;</li>
                    <li className='instruction-list-item'>Добавить на сковородку масло и обжарить фарш 7-10 минут до готовности;</li>
                    <li className='instruction-list-item'>Нарезать мелким кубиком овощи и порубить кинзу;</li>
                    <li className='instruction-list-item'>Промазать небольшим количеством сырного соуса тортилью;</li>
                    <li className='instruction-list-item'>Затем выложить обжаренный фарш, нарезанные овощи</li>
                    <li className='instruction-list-item'>Сверху полить сырным соусом и украсить кинзой</li>
                  </ol>
                </div>
                <button className='popup-button' aria-label='Close' type='button' />
            </div>
        </div>
    );
  }
  
  export default CardPopup;