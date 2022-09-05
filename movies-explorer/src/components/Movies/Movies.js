import { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ 
    filmsCollection,
    matchedMovies, 
    showedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isLoading, 
    storageWord,
    storageCheckbox,
    savedMovies,
    setIsUsersFilmsSearched,
    setShortMovie, 
    filterMovies,
    getSavedMovies,
    handleMoreButton,
    onSave, 
    onRemove
  }) {

  useEffect(() => {
    getSavedMovies();
    setIsUsersFilmsSearched(false); 
    setShortMovie(storageCheckbox);
  }, []);

  return (
    <div className='movies'> 
      <SearchForm 
        filmsList={filmsCollection} 
        shortMovie={shortMovie} 
        storageWord={storageWord}
        setShortMovie={setShortMovie}
        onSearch={filterMovies}>
      </SearchForm>
        {isLoading && <Preloader />}
        {noResult && <WithoutResult />}
      <MoviesCardList 
        matchedMovies={matchedMovies}
        moviesToShow={showedMovies}
        savedMovies={savedMovies}
        noResult={noResult}
        isSearched={isSearched}
        onMore={handleMoreButton}
        onSave={onSave}
        onRemove={onRemove}>
      </MoviesCardList>
    </div>
  );
}

export default Movies;