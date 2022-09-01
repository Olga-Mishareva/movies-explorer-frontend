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
    savedMovies,
    likedMovies,
    liked,
    setLiked,
    setIsSearched,
    setIsUsersFilmsSearched,
    setNoResult,
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
    // setIsSearched(false);  /// ?????????????????
    
  }, []);

  // console.log(savedMovies)

  useEffect(() => {
        setShortMovie(localStorage.getItem('checkbox'));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('search', isSearched);
  // }, [isSearched])

  // console.log(isSearched)
  // console.log(noResult)

  return (
    <div className='movies'> 
      <SearchForm 
        filmsCollection={filmsCollection} 
        shortMovie={shortMovie} 
        isSearched={isSearched}
        setShortMovie={setShortMovie}
        onSearch={filterMovies}>
      </SearchForm>
      {isLoading && <Preloader />}
      {noResult && <WithoutResult />}
      <MoviesCardList 
        matchedMovies={matchedMovies}
        showedMovies={showedMovies}
        savedMovies={savedMovies}
        noResult={noResult}
        isSearched={isSearched}
        likedMovies={likedMovies}
        liked={liked}
        setLiked={setLiked}
        getSavedMovies={getSavedMovies}
        onMore={handleMoreButton}
        onSave={onSave}
        onRemove={onRemove}>
      </MoviesCardList>
    </div>
  );
}

export default Movies;