import './Card.css';

function Card({cat1, cat2, title, description, time, tag1, tag2, image}) {
    return (
       <div className='card'>
        <div className='card__right-column'>
            <ul className='card-categories'>
              <li className='card-categories__item'>{cat1}</li>
              <li className='card-categories__item'>{cat2}</li>
          </ul>
          <h4 className='card-title'>{title}</h4>
          <p className='card-description'>{description}</p>
          <span className='card-time-text'>Дата публикации: <time className='card-time' dateTime={time}>{time}</time></span>
          <ul className='card-tags'>
             <span className='card-tags__title'>теги:</span>
              <li className='card-tag'>{tag1}</li>
              <li className='card-tag'>{tag2}</li>
          </ul>
        </div>
        <img className='card-image'src={image} alt={title}/>
       </div>
    );
  }
  
  export default Card;