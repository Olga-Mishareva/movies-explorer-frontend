import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ matchedMovies, showedMovies, isSearched, noResult, count, isSubmitted, setCount, decideCardCount }) {
  const location = useLocation();
  const gridRef = useRef();
  


  // useEffect(() => {
  //   // if (isSubmitted) {
  //     console.log(gridRef.current.offsetWidth)
  //     decideCardCount(gridRef.current.offsetWidth);
  //   // }
  // }, [gridRef.current.offsetWidth])


  // console.log(gridRef.current.offsetWidth)

  return (
    <div className={`card-list card-list_${noResult ? 'invisible' : ''}`}> 
      <ul ref={gridRef} className='card-list__grid'>
      {showedMovies.map(movie => {
        return <MoviesCard key={movie.id} movie={movie}/>
      })}
      </ul>
      <button className={`card-list__more-btn 
        card-list__more-btn_${location.pathname === '/saved-movies' || noResult || !isSearched || matchedMovies.length === showedMovies.length ? 'invisible' : ''}`}
        type='button'>Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;