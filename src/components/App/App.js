import { Route, Routes } from 'react-router-dom';
import CardPopup from '../../CardPopup/CardPopup';
import About from '../About/About';
import AllCategories from '../AllCategories/AllCategories';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import OwnerInfo from '../OwnerInfo/OwnerInfo';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <OwnerInfo />
      <Routes>
        <Route exact path="/main" element={<Main />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contacts" element={<Contacts />}/>
        <Route exact path="/all-categories" element={<AllCategories />}/>
      </Routes>
      <CardPopup />
    </div>
  );
}

export default App;
