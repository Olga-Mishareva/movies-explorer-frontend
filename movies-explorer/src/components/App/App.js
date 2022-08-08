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
import useLogin from '../../utils/useLogin';
import './App.css';

function App() {
  const { loggedIn, login, logout } = useLogin();


  return (
    <div className='page'>
      <Header loggedIn={loggedIn} login={login}/>
      
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/saved-movies' element={<SavedMovies />}/>
        <Route path='/profile' element={<Profile loggedIn={loggedIn} logout={logout}/>}/>
        <Route path='/signup' element={<Register loggedIn={loggedIn} login={login}/>}/>
        <Route path='/signin' element={<Login loggedIn={loggedIn} login={login}/>}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>

      {/* <InfoPopup /> */}

      <Footer />
    </div>
  );
}

export default App;
