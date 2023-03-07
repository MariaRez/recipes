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
                    <span>Необходимые ингредиенты</span>
                  </div>
                  <span>Инструкция по приготовлению</span>
                </div>
                <button className='popup-button'></button>
            </div>
        </div>
    );
  }
  
  export default CardPopup;