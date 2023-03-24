import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
import back from '../../images/back.svg'

function PageNotFound() {

    let navigate = useNavigate();

    return (
      <section className="page-not-found section">
        <h1 className="page-not-found__title">Упс! Данной страницы не существует</h1>
        <h3 className='page-not-found__description'>Возвращайтесь скорее назад</h3>
        <button className="page-not-found__button" onClick={() => navigate(-1)}><img className='page-not-found__button-image' src={back} alt="Назад" title='Вернуться назад'/></button>
      </section>
    );
  }
  
  export default PageNotFound;