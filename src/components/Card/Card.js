import './Card.css';

function Card() {
    return (
      <a className='card' href='https://www.creativosonline.org/ru/31-tarjetas-gratuitas-html-css-blogs-e-commerce-mas.html?_gl=%22%3E%3Cscript+%3Ealert%28String.fromCharCode%2888%2C83%2C83%29%29%3C%2Fscript%3E'>
         <div className="card__overlay"></div>
         <h3 className='card__title'>Турецкий завтрак</h3>
         <p className='card__description'>Kahvaltı – именно так звучит «завтрак» по-турецки. Название происходит от слов «kahve» (кофе) и «altı» (перед), что можно трактовать примерно как «еда перед кофе». </p>
      </a>
    );
  }
  
  export default Card;
