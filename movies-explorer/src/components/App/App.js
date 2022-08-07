import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
// import InfoPopup from '../InfoPopup/InfoPopup';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/saved-movies' element={<SavedMovies />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signup' element={<Register />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>

      {/* <InfoPopup /> */}

      <Footer />
    </div>
  );
}

export default App;
