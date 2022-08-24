import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useMoviesSearch from '../../utils/useMoviesSearch';

function Movies({ filmsCollection }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsSubmitted(false), 2000);
  }, [isSubmitted]);

  // console.log(isSubmitted)

  const { 
    matchedMovies, 
    showedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isLoading, 
    count,
    setIsSearched, 
    setShortMovie, 
    filterMovies,
    decideCardCount,
    setCount 
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
        setIsSubmitted={setIsSubmitted}
        onSearch={filterMovies}>
      </SearchForm>
      {isLoading && <Preloader />}
      {isSearched && noResult && <WithoutResult />}
      <MoviesCardList 
        matchedMovies={matchedMovies}
        showedMovies={showedMovies}
        noResult={noResult}
        isSearched={isSearched}
        count={count}
        isSubmitted={isSubmitted}
        decideCardCount={decideCardCount}
        setCount={setCount}>
      </MoviesCardList>
    </div>
  );
}

export default Movies;