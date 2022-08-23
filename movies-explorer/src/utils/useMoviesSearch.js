import { useState, useEffect } from 'react';
import { getMovies } from './MoviesApi';

function useMoviesSearch() {
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function filterMovies(word, filmsCollection) {
    setIsLoading(true);
    localStorage.setItem('word', word);
    const regex = new RegExp(`[\\s,\\.]?${word}[\\s,\\.]?`, 'i');  // (`[\\s\\,^]${word}\\s`, 'i');
    setIsSearched(true);
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

  useEffect(() => {
    // console.log(matchedMovies)
    // console.log(matchedMovies[0])
    // console.log(isSearched)
    if (isSearched && !matchedMovies[0]) {
      setNoResult(true);
    }
    else setNoResult(false);
    setIsLoading(false);
  }, [isSearched, matchedMovies])

  // console.log(noResult)

  useEffect(() => {
    matchedMovies.forEach((movie, i )=> {
      localStorage.setItem(`${i}`, JSON.stringify(movie));
    })
    localStorage.setItem('checkbox', shortMovie);
    
    // console.log(JSON.parse(localStorage.getItem(0)))
    // console.log(localStorage.getItem('word'))
    // console.log(localStorage.getItem('checkbox'))
  }, [matchedMovies, shortMovie])
  

  return { matchedMovies, shortMovie, noResult, isSearched, isLoading, setIsSearched, setShortMovie, filterMovies }
}

export default useMoviesSearch;