import CardList from '../CardList/CardList';
import CardPopup from '../CardPopup/CardPopup';
import NavTab from '../NavTab/NavTab';
import './AllCategories.css';

function AllCategories() {
    return (
        <section className='section'>
            <CardPopup />
            <NavTab title={'Все категории'}/>
            <CardList title={'Все категории'}/>
        </section>
    );
  }
  
  export default AllCategories;