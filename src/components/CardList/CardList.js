import Card from '../Card/Card';
import './CardList.css';

function CardList({title}) {
    return (
        <section className='card-list'>
            <h3 className='card-list__title'>Категория: {title}</h3>
            <ul className='card-list__items'>
                <li>
                    <Card 
                      title={'Завтрак Словенский'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/161125164152/161209123709/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Оладьи на йогурте к завтраку'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/120214130615/161112150502/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Завтрак из McDonald’s'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/121220162751/150118205557/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Завтрак Словенский'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/161125164152/161209123709/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Оладьи на йогурте к завтраку'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/120214130615/161112150502/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Завтрак из McDonald’s'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/121220162751/150118205557/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Оладьи на йогурте к завтраку'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/120214130615/161112150502/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      title={'Завтрак из McDonald’s'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/121220162751/150118205557/p_O.jpg.webp'}
                    />
                </li>
            </ul>
        </section>
    );
  }
  
  export default CardList;