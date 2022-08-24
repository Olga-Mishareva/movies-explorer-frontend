import { useState, useEffect } from 'react';
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
import InfoPopup from '../InfoPopup/InfoPopup';
import useAuth from '../../utils/useAuth';
import useInfoPopup from '../../utils/useInfoPopup';
import useMoviesSearch from '../../utils/useMoviesSearch';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUser, updateUser } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [filmsCollection, setFilmsCollection] = useState([]);
  const { 
    loggedIn, 
    authConfirm, 
    authPopup, 
    authError, 
    checkAuth, 
    checkPath,
    changeAuthPopup, 
    handleRegister, 
    handleLogin, 
    handleLogout 
  } = useAuth();
  
  const { 
    isConfirm: profileConfirm,
    isInfoPopupOpen: profilePopup, 
    error: profileError, 
    changeConfirm: changeProfileConfirm,
    changePopup: changeProfilePopup,  
    changeError: changeProfileError
  } = useInfoPopup();

  function getFilmsCollection() {
    getMovies()
      .then(data => {
        setFilmsCollection(data);
      })
      .catch(err => console.log(err))  // заменить потом
  }

  useEffect(() => {
    checkAuth();
    checkPath();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    if (loggedIn) {
      getUser()
        .then(user => {
          setCurrentUser({
            _id: user._id, 
            username: user.name, 
            email: user.email 
          });
          checkPath();
          getFilmsCollection();
        })
        .catch(err => {
          changeProfileError(err.message);
          
          changeProfilePopup(true);
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  

  function updateUserData({ name, email }) {
    updateUser(name, email)
      .then(data => {
        setCurrentUser({ ...currentUser,
          username: data.name, 
          email: data.email
        });
        changeProfileConfirm(true);
        changeProfilePopup(true)
        setTimeout(() => changeProfilePopup(false), 2000);
      })
      .catch(err => {
        changeProfileError(err.message);
        changeProfileConfirm(false);
        changeProfilePopup(true);
      })
  }

  // console.log(currentUser)
 

  function closeInfoPopup() {
    changeAuthPopup(false);
    changeProfilePopup(false);
  }

  // function handleCardGrid(e) {
  //   // setWidth(window.innerWidth)
  //   console.log(window.innerWidth)
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header loggedIn={loggedIn}/>
      
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies filmsCollection={filmsCollection}/>
          </ProtectedRoute>} />

        <Route path='/saved-movies' element={ 
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies />
          </ProtectedRoute>} />

        <Route path='/profile' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Profile onLogout={handleLogout} onUpdate={updateUserData}/>
          </ProtectedRoute>} />

        <Route path='/signup' element={<Register isConfirm={authConfirm} onRegister={handleRegister} />} />
        <Route path='/signin' element={<Login onLogin={handleLogin}/>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      <InfoPopup isConfirm={[authConfirm, profileConfirm]} error={[authError, profileError]} isOpen={[authPopup, profilePopup]} onClose={closeInfoPopup}/>
      {/* {isRegisterPopupOpen && <InfoPopup isSignup={isSignup} authError={authError} isOpen={setIsRegisterPopupOpen}/>} */}

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
