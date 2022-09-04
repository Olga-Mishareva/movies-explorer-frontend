import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import useMoviesSearch from '../../utils/useMoviesSearch';
import useSaveMovies from '../../utils/useSaveMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getAllMovies } from '../../utils/MoviesApi';
import './App.css';

function App() {
  const [filmsCollection, setFilmsCollection] = useState([]);

  const { 
    loggedIn, 
    authConfirm, 
    isAuthPopupOpen, 
    authError,
    currentUser, 
    setIsAuthPopupOpen, 
    handleRegister, 
    handleLogin, 
    handleLogout,
    updateUserData 
  } = useAuth();

  const { 
    matchedMovies, 
    showedMovies,
    userMatchedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isUsersFilmsSearched,
    isLoading, 
    storageWord,
    storageCheckbox,
    setIsUsersFilmsSearched,
    setUserMatchedMovies,
    setShortMovie, 
    filterMovies,
    filterSavedMovies,
    handleMoreButton
  } = useMoviesSearch();

  const { 
    savedMovies, 
    isMoviePopupOpen, 
    movieError, 
    setMovieError,
    setIsMoviePopupOpen,
    handleSaveMovie, 
    getSavedMovies, 
    handleRemoveMovie 
  } = useSaveMovies();

  function getFilmsCollection() {
    getAllMovies()
      .then(data => {
        setFilmsCollection(data);
      })
      .catch(err => {
        setMovieError(err.message);
        setIsMoviePopupOpen(true);
      });
  }

  useEffect(() => {
    if (loggedIn) {
      getFilmsCollection();
    }
  }, [loggedIn]);

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header loggedIn={loggedIn}/>
      
      <Routes>
        <Route path='/' element={<Main />} />

        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route path='/movies' element={
            <Movies 
              filmsCollection={filmsCollection} 
              matchedMovies={matchedMovies} 
              showedMovies={showedMovies} 
              shortMovie={shortMovie} 
              noResult={noResult}
              isSearched={isSearched}
              isLoading={isLoading}
              savedMovies={savedMovies}
              storageWord={storageWord}
              storageCheckbox={storageCheckbox}
              setIsUsersFilmsSearched={setIsUsersFilmsSearched}
              setShortMovie={setShortMovie}
              filterMovies={filterMovies}
              getSavedMovies={getSavedMovies}
              handleMoreButton={handleMoreButton}
              onSave={handleSaveMovie} 
              onRemove={handleRemoveMovie}>
            </Movies>
          }/>
          <Route path='/saved-movies' element={ 
            <SavedMovies 
              savedMovies={savedMovies}
              userMatchedMovies={userMatchedMovies} 
              shortMovie={shortMovie} 
              noResult={noResult}
              isUsersFilmsSearched={isUsersFilmsSearched}
              setIsUsersFilmsSearched={setIsUsersFilmsSearched}
              setUserMatchedMovies={setUserMatchedMovies}
              setShortMovie={setShortMovie}
              filterSavedMovies={filterSavedMovies}
              getSavedMovies={getSavedMovies}
              onRemove={handleRemoveMovie}>
            </SavedMovies>
          }/>
          <Route path='/profile' element={
            <Profile onLogout={handleLogout} onUpdate={updateUserData}/>
          }/>
        </Route>
   
        <Route path='/signup' element={<Register isConfirm={authConfirm} onRegister={handleRegister} />} />
        <Route path='/signin' element={<Login onLogin={handleLogin}/>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      <InfoPopup isConfirm={authConfirm} 
        error={[authError, movieError]} 
        isOpen={[isAuthPopupOpen, isMoviePopupOpen]} 
        onClose={[setIsAuthPopupOpen, setIsMoviePopupOpen]}>
      </InfoPopup>

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
