import { Link } from 'react-router-dom';
import './Card.css';

function Card() {
    return (
      <Link className='card' to='/recipe'>
         <div className="card__overlay"></div>
         <h3 className='card__title'>Турецкий завтрак</h3>
         <p className='card__description'>Kahvaltı – именно так звучит «завтрак» по-турецки. Название происходит от слов «kahve» (кофе) и «altı» (перед), что можно трактовать примерно как «еда перед кофе». </p>
      </Link>
    );
  }
  
  export default Card;
