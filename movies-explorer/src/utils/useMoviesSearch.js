import { useState, useEffect } from 'react';
import { getMovies } from './MoviesApi';

function useMoviesSearch() {
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]); 
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [row, setRow] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 2000);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  console.log(width)

  useEffect(() => {
    if (width > 1023) {
      setCount(4);
      setRow(4);
      return;
    }
    else if (1024 > width && width > 800) {
      setCount(3);
      setRow(4);
      return
    }
    else if (801 > width && width > 560) {
      setCount(2);
      setRow(4);
      return
    }
    else  {
      setCount(1)
      setRow(5);
      return
    }
  }, [width]);

  console.log(count)
  console.log(row)
  
  console.log(matchedMovies)
  console.log(showedMovies)

  function filterMovies(word, filmsCollection) {
    setIsLoading(true);
    localStorage.setItem('word', word);
    const regex = new RegExp(`${word}`, 'i');  // (`[\\s\\,^]${word}\\s`, 'i');
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
    if (showedMovies.length > count * row) {
      return;
    }
    else {
      setShowedMovies(matchedMovies.slice(0, count * row));
    }
  }, [row, count, matchedMovies]);

  function handleMoreButton() {
    if (width < 561) {
      setShowedMovies(matchedMovies.slice(0, (showedMovies.length + count * 2)));
    }
    else {
      setShowedMovies(matchedMovies.slice(0, showedMovies.length + count));
    }
  }

  useEffect(() => {
    if (isSearched && !matchedMovies[0]) {
      setNoResult(true);
    }
    else setNoResult(false);
    setIsLoading(false);
  }, [isSearched, matchedMovies])

  useEffect(() => {
    matchedMovies.forEach((movie, i )=> {
      localStorage.setItem(`${i}`, JSON.stringify(movie));
    })
    localStorage.setItem('checkbox', shortMovie);
    
    // console.log(JSON.parse(localStorage.getItem(0)))
    // console.log(localStorage.getItem('word'))
    // console.log(localStorage.getItem('checkbox'))
  }, [matchedMovies, shortMovie])
  

  return { 
    matchedMovies, 
    showedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isLoading,
    count, 
    setIsSearched, 
    setShortMovie, 
    filterMovies,
    handleMoreButton,
    setCount
  }
}

export default useMoviesSearch;