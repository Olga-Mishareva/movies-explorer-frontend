import { useEffect, useContext } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function SavedMovies({ 
  userMatchedMovies,
  isUsersFilmsSearched, 
  noResult, 
  shortMovie, 
  setUserMatchedMovies,
  setIsUsersFilmsSearched,
  setShortMovie, 
  filterSavedMovies, 
  getSavedMovies,
  onRemove
  }) {

  const savedMovies = useContext(SavedMoviesContext);

  useEffect(() => {
    setIsUsersFilmsSearched(false);
    setShortMovie(false);
    getSavedMovies();
  }, []);

  
  useEffect(() => {
    setIsUsersFilmsSearched(false);
    setShortMovie(false);
  }, [savedMovies]);

  useEffect(() => {
    let userMatchedList = [];
    userMatchedMovies.map(machedMovie => {
      return savedMovies.forEach(savedMovie => {
        if (machedMovie._id === savedMovie._id) {
          userMatchedList.push(machedMovie);
        }
      });
    });
    setUserMatchedMovies(userMatchedList);
  }, [savedMovies]);

  return (
    <div className='saved-movies'> 
      <SearchForm 
        shortMovie={shortMovie} 
        setShortMovie={setShortMovie} 
        filmsList={savedMovies} 
        onSearch={filterSavedMovies}>
      </SearchForm>
        {noResult && <WithoutResult />}
      <MoviesCardList 
        noResult={noResult}
        moviesToShow={!isUsersFilmsSearched ? savedMovies : userMatchedMovies}
        onRemove={onRemove}>
      </MoviesCardList>
    </div>
  );
}

export default SavedMovies;