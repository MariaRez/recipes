import Card from '../Card/Card';
import './CardList.css';

function CardList() {
    return (
        <section className='card-list'>
            <h3 className='card-list__title'>Категория: Завтраки</h3>
            <ul className='card-list__items'>
                <li>
                    <Card 
                      cat1={'Завтраки'}
                      cat2={'Cытное'}
                      title={'Завтрак Словенский'}
                      description={'Простое блюдо, которое насытит вас и ваших близких. Готовиться довольно просто, но вкус просто потрясающий'}
                      time={'2021-10-12'}
                      tag1={'яйца'}
                      tag2={'сытное'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/161125164152/161209123709/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      cat1={'Завтраки'}
                      cat2={'Легкое'}
                      title={'Оладьи на йогурте к завтраку'}
                      description={'Быстрые и вкусные оладьи из пары ингредиентов'}
                      time={'2022-11-01'}
                      tag1={'яйца'}
                      tag2={'легкое'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/120214130615/161112150502/p_O.jpg.webp'}
                    />
                </li>
                <li>
                    <Card 
                      cat1={'Завтраки'}
                      cat2={'Сытное'}
                      title={'Завтрак из McDonald’s. Макмаффин с яйцом и свиной котлетой'}
                      description={'Давно не были в любимом фаст-фуд ресторане? Ах, да, он же закрыт! Тогда самое время сделать самому любимый бургер на завтрак'}
                      time={'2023-03-02'}
                      tag1={'яйца'}
                      tag2={'сыр'}
                      image={'https://eda.ru/img/eda/c1240x830/s1.eda.ru/StaticContent/Photos/121220162751/150118205557/p_O.jpg.webp'}
                    />
                </li>
            </ul>
        </section>
    );
  }
  
  export default CardList;