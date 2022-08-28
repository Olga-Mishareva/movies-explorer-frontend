import { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, setSavedMovies, isSearched, noResult, shortMovie, setShortMovie, filterMovies, getSavedMovies }) {

  useEffect(() => {
    getSavedMovies();
  }, []);

  return (
    <div className='saved-movies'> 
      <SearchForm shortMovie={shortMovie} setShortMovie={setShortMovie} savedMovies={savedMovies} onSearch={filterMovies}/>
      {isSearched && noResult && <WithoutResult />}
      <MoviesCardList 
        noResult={noResult}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}/>
    </div>
  );
}

export default SavedMovies;