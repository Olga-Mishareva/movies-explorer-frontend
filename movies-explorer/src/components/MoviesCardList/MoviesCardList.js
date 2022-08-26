// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ matchedMovies, showedMovies, isSearched, noResult, onMore }) {
  const location = useLocation();

  return (
    <div className={`card-list card-list_${noResult ? 'invisible' : ''}`}> 
      <ul className='card-list__grid'>
      {showedMovies.map(movie => {
        return <MoviesCard key={movie.id} movie={movie}/>
      })}
      </ul>

      <button className={`card-list__more-btn card-list__more-btn_${
        location.pathname === '/saved-movies' || 
        matchedMovies.length === showedMovies.length ||
        noResult ||
        !isSearched ? 
        'invisible' :
        ''}`}
        type='button' 
        onClick={onMore}>
          Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;