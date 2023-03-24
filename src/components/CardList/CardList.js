import Card from '../Card/Card';
import './CardList.css';

function CardList({title}) {
    return (
        <section className='card-list section'>
            <h3 className='card-list__title'>Категория: {title}</h3>
            <ul className='card-list__items'>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
            </ul>
        </section>
    );
  }
  
  export default CardList;