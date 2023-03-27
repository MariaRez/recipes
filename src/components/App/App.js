import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../About/About';
import AllCategories from '../AllCategories/AllCategories';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import OwnerInfo from '../OwnerInfo/OwnerInfo';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import './App.css';
import CardPopup from '../Recipe/Recipe';

function App() {

  const location = useLocation();

  return (
    <div className='app'>
      <div className='background-image background-image_broccoli'/>
      <Header />
      {location.pathname === "/" ||
       location.pathname === "/about" ||
       location.pathname === "/contacts" ||
       location.pathname === "/all-categories" ||
       location.pathname === "/recipe" ? (
          <OwnerInfo />
        ) : (
          ""
        )}
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contacts" element={<Contacts />}/>
        <Route exact path="/all-categories" element={<AllCategories />}/>
        <Route exact path='/recipe' element={<CardPopup />}/>
        <Route exact path="/*" element={<PageNotFound />}/>
      </Routes>
      <div className='background-image background-image_apple'/>
      {location.pathname === "/" ||
       location.pathname === "/about" ||
       location.pathname === "/contacts" ||
       location.pathname === "/all-categories" ||
       location.pathname === "/recipe" ? (
          <Footer />
        ) : (
          ""
        )}
    </div>
  );
}

export default App;
