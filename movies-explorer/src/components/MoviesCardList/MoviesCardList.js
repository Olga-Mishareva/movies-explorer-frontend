import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { LanguageContext } from '../../contexts/LanguageContext';
import './MoviesCardList.css';

function MoviesCardList({
  matchedMovies,
  moviesToShow,
  isSearched,
  noResult,
  onMore,
  onSave,
  onRemove,
  }) {
  const { pathname } = useLocation();
  const [ lang ] = useContext(LanguageContext);

  return (
    <div className={`card-list card-list_${noResult && pathname === '/movies' ? 'invisible' : ''}`}>
      <ul className='card-list__grid'>
        {moviesToShow.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              onSave={onSave}
              onRemove={onRemove}>
            </MoviesCard>
          );
        })}
      </ul>
      <button
        className={`card-list__more-btn card-list__more-btn_${
          pathname === '/saved-movies' 
          || matchedMovies.length === moviesToShow.length 
          ? 'invisible' : ''}
          ${noResult || !isSearched ? 'invisible' : '' }`}
        type='button'
        onClick={onMore}>
        {lang.moreBtn}
      </button>
    </div>
  );
}

export default MoviesCardList;
