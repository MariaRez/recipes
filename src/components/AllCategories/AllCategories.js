import { Link } from 'react-router-dom';
import CardList from '../CardList/CardList';
import CardPopup from '../CardPopup/CardPopup';
import './AllCategories.css';

function AllCategories() {
    return (
        <section className='section'>
            <CardPopup />
            <div className='title-container'>
                <Link className='main-link' to='/'>На главную</Link>
                <h2 className='title'>Все категории</h2>
            </div>
            <CardList title={'Все категории'}/>
        </section>
    );
  }
  
  export default AllCategories;