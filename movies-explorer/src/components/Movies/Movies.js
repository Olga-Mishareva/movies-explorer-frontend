import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div className='movies'> 
      <SearchForm />
      {/* <Preloader /> */}
      {/* <WithoutResult /> */}
      <MoviesCardList />
    </div>
  );
}

export default Movies;