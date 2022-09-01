import { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ 
  savedMovies, 
  userMatchedMovies,
  setSavedMovies, 
  setUserMatchedMovies,
  isUsersFilmsSearched, 
  noResult, 
  shortMovie, 
  liked,
  setIsUsersFilmsSearched,
  setLiked,
  setShortMovie, 
  filterSavedMovies, 
  getSavedMovies,
  onRemove
}) {

  // const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    // console.log(isUsersFilmsSearched)
    // console.log(noResult)
    setIsUsersFilmsSearched(false);
    setShortMovie(false);
    getSavedMovies();
  }, []);

  useEffect(() => {

  }, [])

  return (
    <div className='saved-movies'> 
      <SearchForm 
        shortMovie={shortMovie} 
        setShortMovie={setShortMovie} 
        savedMovies={savedMovies} 
        isUsersFilmsSearched={isUsersFilmsSearched}
        onSearch={filterSavedMovies} />
      {noResult && <WithoutResult />}
      <MoviesCardList 
        noResult={noResult}
        savedMovies={savedMovies}
        userMatchedMovies={userMatchedMovies}
        setUserMatchedMovies={setUserMatchedMovies}
        liked={liked}
        isUsersFilmsSearched={isUsersFilmsSearched}
        setLiked={setLiked}
        setSavedMovies={setSavedMovies} 
        onRemove={onRemove}/>
    </div>
  );
}

export default SavedMovies;