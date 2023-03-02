import { Link } from 'react-router-dom';
import CardList from '../CardList/CardList';
import './Breakfast.css';

function Breakfast() {
    return (
        <section className='breakfast'>
            <div className='breakfast-title-container'>
                <Link className='main-link' to='/main'>На главную</Link>
                <h2 className='breakfast-title'>Завтраки</h2>
            </div>
            <CardList />
        </section>
    );
  }
  
  export default Breakfast;