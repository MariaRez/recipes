import { Route, Routes} from 'react-router-dom';
import About from '../About/About';
import Categories from '../Categories/Categories';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path="/main" element={<Main />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/categories" element={<Categories />}/>
        <Route exact path="/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;
