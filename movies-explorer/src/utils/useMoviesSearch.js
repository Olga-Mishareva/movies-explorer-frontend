import { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
import useResize from './useResize';

function useMoviesSearch() {
  const { width, count, row } = useResize();
  // const location = useLocation();
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]); 
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
        setMatchedMovies(JSON.parse(localStorage.getItem('matched-movies')));
        setShortMovie(localStorage.getItem('checkbox'));
  }, []);

  function filterMovies(word, filmsCollection) {
    setIsLoading(true);
    localStorage.setItem('word', word);
    const regex = new RegExp(`${word}`, 'i'); 
    console.log(regex)
    
    if (shortMovie) {
      const shortFilmList = filmsCollection.filter(movie => {
        return (movie.nameRU.match(regex)) && movie.duration <= 40;
      })
      setMatchedMovies(shortFilmList);
      localStorage.setItem('matched-movies', JSON.stringify(shortFilmList));
    }
    else {
      const filmList = filmsCollection.filter(movie => {
        return  movie.nameRU.match(regex);    
      })
      setMatchedMovies(filmList);
      localStorage.setItem('matched-movies', JSON.stringify(filmList));
    }
    setIsSearched(true);
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

  console.log(JSON.parse(localStorage.getItem('matched-movies')))
  console.log(localStorage.getItem('word'))
  console.log(localStorage.getItem('checkbox'))

  return { 
    matchedMovies, 
    showedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isLoading,
    count, 
    setMatchedMovies, 
    setShortMovie, 
    filterMovies,
    handleMoreButton,
  }
}

export default useMoviesSearch;