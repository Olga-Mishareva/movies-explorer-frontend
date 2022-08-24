import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useMoviesSearch from '../../utils/useMoviesSearch';

function Movies({ filmsCollection }) {
  const { 
    matchedMovies, 
    showedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isLoading, 
    setIsSearched, 
    setShortMovie, 
    filterMovies,
    handleMoreButton,
  } = useMoviesSearch();
  // console.log(matchedMovies)

  return (
    <div className='movies'> 
      <SearchForm 
        filmsCollection={filmsCollection} 
        shortMovie={shortMovie} 
        isSearched={isSearched}
        setShortMovie={setShortMovie}
        setIsSearched={setIsSearched}
        onSearch={filterMovies}>
      </SearchForm>
      {isLoading && <Preloader />}
      {isSearched && noResult && <WithoutResult />}
      <MoviesCardList 
        matchedMovies={matchedMovies}
        showedMovies={showedMovies}
        noResult={noResult}
        isSearched={isSearched}
        onMore={handleMoreButton}>
      </MoviesCardList>
    </div>
  );
}

export default Movies;