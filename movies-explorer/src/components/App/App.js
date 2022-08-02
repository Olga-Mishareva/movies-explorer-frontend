import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Header />
      
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/saved-movies'/>
        <Route path='/profile'/>
        <Route path='/signup'/>
        <Route path='/signin'/>
      

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
