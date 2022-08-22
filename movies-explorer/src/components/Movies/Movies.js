import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useMoviesSearch from '../../utils/useMoviesSearch';

function Movies({ filmsCollection }) {
  const { filterMovies, shortMovie, setShortMovie, matchedMovies } = useMoviesSearch();
  console.log(matchedMovies)

  return (
    <div className='movies'> 
      <SearchForm filmsCollection={filmsCollection} shortMovie={shortMovie} onSearch={filterMovies} setShortMovie={setShortMovie}/>
      {/* <Preloader /> */}
      {/* <WithoutResult /> */}
      <MoviesCardList movies={matchedMovies}/>
    </div>
  );
}

export default Movies;