import './Card.css';

function Card({ title, image }) {
    return (
       <div className='card'>
        <img className='card-image'src={image} alt={title}/>
        <h4 className='card-title'>{title}</h4>
       </div>
    );
  }
  
  export default Card;