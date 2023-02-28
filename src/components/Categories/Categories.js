import './Categories.css';

function Categories() {
  return (
    <main className='categories'>
      <ul className='category-type'>
        <li className='categories-item'>
          <img className='categories-item__image' src='https://images.unsplash.com/photo-1677174251315-04b70398048d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='картинка'/>
          <p className='categories-item__text'>Завтрак</p>
        </li>
        <li className='categories-item'>
          <img className='categories-item__image' src='https://images.unsplash.com/photo-1675790959822-b164bea916f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80' alt='картинка'/>
          <p className='categories-item__text'>Обед</p>
        </li>
        <li className='categories-item'>
          <img className='categories-item__image' src='https://images.unsplash.com/photo-1677174251315-04b70398048d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='картинка'/>
          <p className='categories-item__text'>Ужин</p>
        </li>
        <li className='categories-item'>
          <img className='categories-item__image' src='https://images.unsplash.com/photo-1675790959822-b164bea916f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80' alt='картинка'/>
          <p className='categories-item__text'>Перекус</p>
        </li>
        <li className='categories-item'>
          <img className='categories-item__image' src='https://images.unsplash.com/photo-1675790959822-b164bea916f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80' alt='картинка'/>
          <p className='categories-item__text'>Супы</p>
        </li>
        <li className='categories-item'>
          <img className='categories-item__image' src='https://images.unsplash.com/photo-1675790959822-b164bea916f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80' alt='картинка'/>
          <p className='categories-item__text'>Напитки</p>
        </li>
      </ul>
      <ul className='category-food-type'>
      </ul>
    </main>
  );
}

export default Categories;
