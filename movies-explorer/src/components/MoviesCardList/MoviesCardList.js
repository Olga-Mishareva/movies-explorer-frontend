import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const location = useLocation();

  return (
    <div className='card-list'> 
      <ul className='card-list__grid'>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      </ul>
      <button className={`card-list__more-btn 
        card-list__more-btn_${location.pathname === '/saved-movies' ? 'invisible' : ''}`}
        type='button'>Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;