import { useState, useEffect } from 'react';
import { getMovies } from './MoviesApi';

function useMoviesSearch() {
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  function filterMovies(word, filmsCollection) {
    console.log(word)
    localStorage.setItem('word', word);
    const regex = new RegExp(`[\\s,\\.]?${word}[\\s,\\.]?`, 'i');  // (`[\\s\\,^]${word}\\s`, 'i');
    
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
    setIsSearched(true);
  }  

  useEffect(() => {
    console.log(matchedMovies)
    console.log(matchedMovies[0])
    console.log(isSearched)
    if (isSearched && !matchedMovies[0]) {
      setNoResult(true);
    }
    else setNoResult(false);
  }, [isSearched, matchedMovies])

  // useEffect(() => {
  //   setIsSearched(true);
  // }, [matchedMovies])

  console.log(noResult)

  useEffect(() => {
    matchedMovies.forEach((movie, i )=> {
      localStorage.setItem(`${i}`, JSON.stringify(movie));
    })
    localStorage.setItem('checkbox', shortMovie);
    
    // console.log(JSON.parse(localStorage.getItem(0)))
    // console.log(localStorage.getItem('word'))
    // console.log(localStorage.getItem('checkbox'))
  }, [matchedMovies, shortMovie])
  

  return { matchedMovies, shortMovie, noResult, isSearched, setIsSearched, setShortMovie, filterMovies }
}

export default useMoviesSearch;