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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUser, updateUser } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState({});
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
    isInfoPopupOpen: profilePopup, 
    error: profileError, 
    changePopup: changeProfilePopup,  
    changeError: changeProfileError
  } = useInfoPopup();

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
        })
      })
      .catch(err => {
        changeProfileError(err.message);
        changeProfilePopup(true);
      })
  }

  // console.log(currentUser)
 

  function closeInfoPopup() {
    changeAuthPopup(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header loggedIn={loggedIn}/>
      
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies />
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

      <InfoPopup isConfirm={authConfirm} error={[authError, profileError]} isOpen={[authPopup, profilePopup]} onClose={closeInfoPopup}/>
      {/* {isRegisterPopupOpen && <InfoPopup isSignup={isSignup} authError={authError} isOpen={setIsRegisterPopupOpen}/>} */}

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
