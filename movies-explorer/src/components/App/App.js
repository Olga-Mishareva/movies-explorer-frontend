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
import useSaveMovies from '../../utils/useSaveMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUser, updateUser } from '../../utils/MainApi';
import { getAllMovies } from '../../utils/MoviesApi';
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

  const { 
    matchedMovies, 
    showedMovies,
    userMatchedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isUsersFilmsSearched,
    isLoading, 
    setNoResult,
    setIsSearched,
    setIsUsersFilmsSearched,
    setMatchedMovies,
    setUserMatchedMovies,
    setShortMovie, 
    filterMovies,
    filterSavedMovies,
    handleMoreButton
  } = useMoviesSearch();

  const { savedMovies, liked, likedMovies, setLiked, setSavedMovies, handleSaveMovie, getSavedMovies, handleRemoveMovie } = useSaveMovies();

  function getFilmsCollection() {
    getAllMovies()
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

  function closeInfoPopup() {
    changeAuthPopup(false);
    changeProfilePopup(false);
  }

  // useEffect(() => {
  //   getSavedMovies();
  // }, []);

  // console.log(savedMovies)

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header loggedIn={loggedIn}/>
      
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies 
              filmsCollection={filmsCollection} 
              matchedMovies={matchedMovies} 
              showedMovies={showedMovies} 
              shortMovie={shortMovie} 
              noResult={noResult}
              isSearched={isSearched}
              isLoading={isLoading}
              savedMovies={savedMovies}
              likedMovies={likedMovies}
              liked={liked}
              setLiked={setLiked}
              setNoResult={setNoResult}
              setIsSearched={setIsSearched}
              setIsUsersFilmsSearched={setIsUsersFilmsSearched}
              setMatchedMovies={setMatchedMovies}
              setShortMovie={setShortMovie}
              filterMovies={filterMovies}
              getSavedMovies={getSavedMovies}
              handleMoreButton={handleMoreButton}
              onSave={handleSaveMovie} 
              onRemove={handleRemoveMovie}>
            </Movies>
          </ProtectedRoute>} />

        <Route path='/saved-movies' element={ 
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies 
              savedMovies={savedMovies}
              userMatchedMovies={userMatchedMovies} 
              shortMovie={shortMovie} 
              noResult={noResult}
              isUsersFilmsSearched={isUsersFilmsSearched}
              liked={liked}
              setLiked={setLiked}
              setIsUsersFilmsSearched={setIsUsersFilmsSearched}
              setSavedMovies={setSavedMovies}
              setUserMatchedMovies={setUserMatchedMovies}
              setShortMovie={setShortMovie}
              filterSavedMovies={filterSavedMovies}
              getSavedMovies={getSavedMovies}
              onRemove={handleRemoveMovie}
              />
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

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
