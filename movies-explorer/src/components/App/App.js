import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { LanguageContext } from '../../contexts/LanguageContext';
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
import useFilmCollection from '../../utils/useFilmCollection';
import useMoviesSearch from '../../utils/useMoviesSearch';
import useSaveMovies from '../../utils/useSaveMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { EN, RU, DE } from '../../constants/languages';
import './App.css';

function App() {
  const [pageLang, setPageLang] = useState(EN.language);
  const [lang, setLang] = useState(EN);

  const { 
    loggedIn, 
    isConfirm, 
    isPopupOpen, 
    authError,
    currentUser, 
    inputIsDisabled,
    setAuthError,
    setIsPopupOpen, 
    handleRegister, 
    handleLogin, 
    handleLogout,
    updateUserData 
  } = useAuth();

  const { filmsCollection } = useFilmCollection(setAuthError, setIsPopupOpen);

  const { 
    matchedMovies, 
    showedMovies,
    userMatchedMovies,
    shortMovie, 
    noResult, 
    isSearched,
    isLoading, 
    isUsersFilmsSearched,
    storageWord,
    storageCheckbox,
    setStorageWord,
    setShowedMovies,
    setIsSearched,
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
    setIsMoviePopupOpen,
    handleSaveMovie, 
    getSavedMovies, 
    handleRemoveMovie 
  } = useSaveMovies();

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      setShowedMovies([]);
      setIsSearched(false);
      setStorageWord('');
    }
  }, [loggedIn]);

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: pageLang }}/>
      <LanguageContext.Provider value={[lang, setLang]}>
      <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
      <div className='page'>
        <Header loggedIn={loggedIn} setPageLang={setPageLang}/>
        
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />

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
              <Profile 
                onLogout={handleLogout} 
                onUpdate={updateUserData}/>
              }/>
          </Route>
    
          <Route path='/signup' element={
            <Register 
              isConfirm={isConfirm} 
              isDisabled={inputIsDisabled}
              onRegister={handleRegister}/>
            }/>
          <Route path='/signin' element={
            <Login 
            onLogin={handleLogin} 
            isDisabled={inputIsDisabled}/>
            }/>
          <Route path='*' element={<NoMatch />} />
        </Routes>

        <InfoPopup isConfirm={isConfirm} 
          errors={[authError, movieError]} 
          isOpen={[isPopupOpen, isMoviePopupOpen]} 
          onClose={[setIsPopupOpen, setIsMoviePopupOpen]}>
        </InfoPopup>

        <Footer />
      </div>
      </SavedMoviesContext.Provider>
      </CurrentUserContext.Provider>
      </LanguageContext.Provider>
    </HelmetProvider>
  );
}

export default App;
