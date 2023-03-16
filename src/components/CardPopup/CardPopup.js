import './CardPopup.css';

function CardPopup() {
    return (
        <div className='popup'>
            <div className='popup-container'>
                <div className='popup-content-container'>
                  <h2 className='popup-title'>Паста с семгой в сливочно-чесночном соусе</h2>
                  <div className='popup-description'>
                    <img
                    className='popup-image'
                    src='https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/130314030255/130324184219/p_O.jpg.webp' 
                    alt='Паста с семгой в сливочно-чесночном соусе'/>
                    <div>
                      <table className='ingredients-table'>
                        <caption className='ingredients-title'>Необходимые ингредиенты</caption>
                        <tbody>
                          <tr>
                            <td>Паста</td>
                            <td>200 г</td>
                          </tr>
                          <tr>
                            <td>Семга</td>
                            <td>200 г</td>
                          </tr>
                          <tr>
                            <td>Сливки 20%-ные</td>
                            <td>150 мл</td>
                          </tr>
                          <tr>
                            <td>Сливочное масло</td>
                            <td>40 г</td>
                          </tr>
                          <tr>
                            <td>Оливковое масло</td>
                            <td>1 столовая ложка</td>
                          </tr>
                          <tr>
                            <td>Чеснок</td>
                            <td>3 зубчика</td>
                          </tr>
                          <tr>
                            <td>Зелень</td>
                            <td>1 пучок</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <span className='instruction-title'>Инструкция по приготовлению</span>
                  <ol className='instruction-list'>
                    <li className='instruction-list-item'>Пасту отварить, добавить оливковое масло.</li>
                    <li className='instruction-list-item'>Семгу нарезать небольшими кусочками и обжарить в сливочном масле 5-10 минут.</li>
                    <li className='instruction-list-item'>Потихоньку влить сливки и чуть увеличить мощность плиты, довести до кипения, убавить мощность, чтобы чуть подкипала вся масса.</li>
                    <li className='instruction-list-item'>Добавить зелень и мелко нарезанный чеснок.</li>
                    <li className='instruction-list-item'>Добавить соус в пасту, перемешать и прогреть в кастрюле.</li>
                  </ol>
                </div>
                <button className='popup-button' aria-label='Close' type='button' />
            </div>
        </div>
    );
  }
  
  export default CardPopup;