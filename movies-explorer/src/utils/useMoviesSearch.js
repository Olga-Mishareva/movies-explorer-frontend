import { useState, useEffect } from 'react';
import { getMovies } from './MoviesApi';

function useMoviesSearch() {
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);

  function filterMovies(word, filmsCollection) {
    const regex = new RegExp(`[\\s,]?${word}[\\s,]?`, 'i');  // (`[\\s\\,^]${word}\\s`, 'i');
    if (shortMovie) {
      setMatchedMovies(filmsCollection.filter(movie => {
        return movie.nameRU.match(regex) && movie.duration <= 40;
      }));
    }
    else {
      setMatchedMovies(filmsCollection.filter(movie => {
        return movie.nameRU.match(regex);
      }));
    }
  }  

  // console.log(matchedMovies)

  return { matchedMovies, shortMovie, setShortMovie, filterMovies }
}

export default useMoviesSearch;