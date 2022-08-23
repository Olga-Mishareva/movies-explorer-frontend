import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useMoviesSearch from '../../utils/useMoviesSearch';

function Movies({ filmsCollection }) {
  const { matchedMovies, shortMovie, noResult, isSearched, isLoading, setIsSearched, setShortMovie, filterMovies } = useMoviesSearch();
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
        movies={matchedMovies}
        noResult={noResult}
        isSearched={isSearched}>
      </MoviesCardList>
    </div>
  );
}

export default Movies;