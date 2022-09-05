import { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ 
  savedMovies, 
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

  useEffect(() => {
    setIsUsersFilmsSearched(false);
    setShortMovie(false);
    getSavedMovies();
  }, []);

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
        savedMovies={savedMovies}
        moviesToShow={!isUsersFilmsSearched ? savedMovies : userMatchedMovies}
        onRemove={onRemove}>
      </MoviesCardList>
    </div>
  );
}

export default SavedMovies;