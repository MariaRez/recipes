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
                      <p className='ingredients'>Необходимые ингредиенты</p>
                      <dl>
                        <dt>Паста</dt>
                        <dd>200 г</dd>
                        <dt>Семга</dt>
                        <dd>200 г</dd>
                        <dt>Сливки 20%-ные</dt>
                        <dd>150 мл</dd>
                        <dt>Сливочное масло</dt>
                        <dd>40 г</dd>
                        <dt>Оливковое масло</dt>
                        <dd>1 столовая ложка</dd>
                        <dt>Чеснок</dt>
                        <dd>3 зубчика</dd>
                        <dt>Зелень</dt>
                        <dd>1 пучок</dd>
                      </dl>
                    </div>
                  </div>
                  <span>Инструкция по приготовлению</span>
                  <ol>
                    <li>Пасту отварить, добавить оливковое масло.</li>
                    <li>Семгу нарезать небольшими кусочками и обжарить в сливочном масле 5-10 минут.</li>
                    <li>Потихоньку влить сливки и чуть увеличить мощность плиты, довести до кипения, убавить мощность, чтобы чуть подкипала вся масса.</li>
                    <li>Добавить зелень и мелко нарезанный чеснок.</li>
                    <li>Добавить соус в пасту, перемешать и прогреть в кастрюле.</li>
                  </ol>
                </div>
                <button className='popup-button' aria-label='Close' type='button' />
            </div>
        </div>
    );
  }
  
  export default CardPopup;