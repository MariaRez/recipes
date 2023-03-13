import { Link } from 'react-router-dom';
import CardPopup from '../../CardPopup/CardPopup';
import CardList from '../CardList/CardList';
import './AllCategories.css';

function AllCategories() {
    return (
        <section className='all-categories'>
            <CardPopup />
            <div className='all-categories-title-container'>
                <Link className='main-link' to='/main'>На главную</Link>
                <h2 className='all-categories-title'>Все категории</h2>
            </div>
            <CardList title={'Все категории'}/>
        </section>
    );
  }
  
  export default AllCategories;