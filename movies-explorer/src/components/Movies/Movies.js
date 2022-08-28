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
    setShortMovie, 
    filterMovies,
    handleMoreButton,
    handleSaveMovie
    }) {

    useEffect(() => {
          setShortMovie(localStorage.getItem('checkbox'));
    }, []);

  useEffect(() => {
    localStorage.setItem('search', isSearched);
  }, [isSearched])

  console.log(matchedMovies)

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
      {isSearched && noResult && <WithoutResult />}
      <MoviesCardList 
        matchedMovies={matchedMovies}
        showedMovies={showedMovies}
        noResult={noResult}
        isSearched={isSearched}
        onMore={handleMoreButton}
        handleSaveMovie={handleSaveMovie}>
      </MoviesCardList>
    </div>
  );
}

export default Movies;