import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  const location = useLocation();

  return (
    <div className='card-list'> 
      <ul className='card-list__grid'>
      {movies.map(movie => {
        return <MoviesCard key={movie.id} movie={movie}/>
      })}
      </ul>
      <button className={`card-list__more-btn 
        card-list__more-btn_${location.pathname === '/saved-movies' ? 'invisible' : ''}`}
        type='button'>Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;