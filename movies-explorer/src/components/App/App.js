import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Header />
      
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/saved-movies' element={<SavedMovies />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signup'/>
        <Route path='/signin'/>
      

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
