import './Main.css';
import glass from '../../images/main/glass.jpg';
import bread from '../../images/main/bread-and-eggs.jpg';
import sky from '../../images/main/sky.jpg';

function Main() {
  return (
    <main className='main section'>
      <div className='main__image-container'>
        <img className='main__image' alt='' src={glass}></img>
        <img className='main__image' alt='' src={bread}></img>
        <img className='main__image' alt='' src={sky}></img>
      </div>
      <span className="main-text">Давайте познакомимся</span>
    </main>
  );
}

export default Main;
