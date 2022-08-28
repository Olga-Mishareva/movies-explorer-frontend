// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ matchedMovies, showedMovies, isSearched, noResult, onMore, savedMovies, setSavedMovies, handleSaveMovie }) {
  const location = useLocation();
  const moviesList = location.pathname === '/movies' ? showedMovies : savedMovies;

  console.log(savedMovies)
  console.log(moviesList)


  return (
    <div className={`card-list card-list_${noResult ? 'invisible' : ''}`}> 
      <ul className='card-list__grid'>
        {moviesList.map(movie => {
        return <MoviesCard key={movie.id || movie._id} movie={movie} onSave={handleSaveMovie}/>})}
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