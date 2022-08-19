import { useState, useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const { 
    loggedIn, 
    loggedUserData, 
    authConfirm, 
    authPopup, 
    authError, 
    checkAuth, 
    changeAuthPopup, 
    handleRegister, 
    handleLogin, 
    handleLogout 
  } = useAuth();

  useEffect(() => {
    checkAuth();
  },[]);

  useEffect(() => {
    if (loggedIn) {
      setCurrentUser(loggedUserData);
      navigate('/movies');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  console.log(loggedUserData)
 

  function closeInfoPopup() {
    changeAuthPopup(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header loggedIn={loggedIn}/>
      
      <Routes>
        
        <Route path='/' element={<Main />} />

        <Route path='movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies />
          </ProtectedRoute>} />

        <Route path='saved-movies' element={ 
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies />
          </ProtectedRoute>} />

        <Route path='profile' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Profile loggedIn={loggedIn} onLogout={handleLogout}/>
          </ProtectedRoute>} />

        <Route path='signup' element={<Register loggedIn={loggedIn} isConfirm={authConfirm} onRegister={handleRegister}/>} />
        <Route path='signin' element={<Login loggedIn={loggedIn} onLogin={handleLogin}/>} />
        <Route path='*' element={<NoMatch />} />

      </Routes>

      <InfoPopup isConfirm={[authConfirm]} error={[authError]} isOpen={[authPopup]} onClose={closeInfoPopup}/>
      {/* {isRegisterPopupOpen && <InfoPopup isSignup={isSignup} authError={authError} isOpen={setIsRegisterPopupOpen}/>} */}

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
