import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import WithoutResult from '../WithoutResult/WithoutResult';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Paganation from '../Paganation/Paganation';

function Movies() {
  return (
    <div className='movies'> 
      <SearchForm />
      {/* <Preloader /> */}
      <WithoutResult />
      {/* <MoviesCardList /> */}
      {/* <Paganation /> */}
    </div>
  );
}

export default Movies;