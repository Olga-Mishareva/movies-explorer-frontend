import { useState, useEffect } from 'react';
import { getMovies } from './MoviesApi';

function useMoviesSearch() {
  const [matchedMovies, setMatchedMovies] = useState([]);

  function filterMovies(word, filmsCollection) {
    const regex = new RegExp(`[\\s,]?${word}[\\s,]?`, 'i');  // (`[\\s\\,^]${word}\\s`, 'i');
    // console.log(filmsCollection)
    // console.log(regex)
    setMatchedMovies(filmsCollection.filter(movie => {
      return movie.nameRU.match(regex)  
    }));
  }  

  // console.log(matchedMovies)

  return { matchedMovies, filterMovies }
}

export default useMoviesSearch;