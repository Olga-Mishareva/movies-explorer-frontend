import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useMoviesSearch from '../../utils/useMoviesSearch';

function Movies({ filmsCollection }) {
  const { filterMovies, matchedMovies } = useMoviesSearch();
  console.log(matchedMovies)

  return (
    <div className='movies'> 
      <SearchForm filmsCollection={filmsCollection} onSearch={filterMovies}/>
      {/* <Preloader /> */}
      {/* <WithoutResult /> */}
      <MoviesCardList movies={matchedMovies}/>
    </div>
  );
}

export default Movies;