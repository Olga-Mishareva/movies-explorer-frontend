import { useState, useEffect } from 'react';
import useResize from './useResize';

function useMoviesSearch() {
  const { width, count, row } = useResize();
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]); 
  const [userMatchedMovies, setUserMatchedMovies] = useState([]); //??
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isUsersFilmsSearched, setIsUsersFilmsSearched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {                                                                  
        setMatchedMovies(JSON.parse(localStorage.getItem('matched-movies'))); // temporare
        setShortMovie(localStorage.getItem('checkbox'));
  }, []);

  function filterMovies(word, filmsCollection) {
    setIsLoading(true);
    localStorage.setItem('word', word);
    const regex = new RegExp(`${word}`, 'i'); 
    console.log(regex)

    if (shortMovie) {
      const shortFilmList = filmsCollection.filter(movie => {
        if(movie.nameEN !== null) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) && movie.duration <= 40;
        }
      })
      setMatchedMovies(shortFilmList);
      localStorage.setItem('matched-movies', JSON.stringify(shortFilmList)); 
      localStorage.setItem('checkbox', shortMovie);
    }
    else {
      const filmList = filmsCollection.filter(movie => {
        if(movie.nameEN !== null) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) ;
        }    
      })
      setMatchedMovies(filmList);
      localStorage.setItem('matched-movies', JSON.stringify(filmList));
      localStorage.setItem('checkbox', '');
    }
    setIsSearched(true);
  }  

  function filterSavedMovies(word, usersCollection) {
    setIsLoading(true);
    const regex = new RegExp(`${word}`, 'i'); 
    if (shortMovie) {
      const shortFilmList = usersCollection.filter(movie => {
        if(movie.nameEN !== null) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) && movie.duration <= 40;
        }
      })
      setUserMatchedMovies(shortFilmList);
    }
    else {
      const filmList = usersCollection.filter(movie => {
        if(movie.nameEN !== null) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) ;
        }    
      })
      setUserMatchedMovies(filmList);
    }
    setIsUsersFilmsSearched(true);
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
    // console.log(matchedMovies[0])
    // console.log(isSearched)
    // console.log(noResult)
    if (isSearched && !matchedMovies[0]) {
      setNoResult(true);
      setIsLoading(false);
      return;
    }
    if (isUsersFilmsSearched && !userMatchedMovies[0]) {
      setNoResult(true);
      setIsLoading(false);
      return;
    }
    else setNoResult(false);
    setIsLoading(false);
  }, [isSearched, isUsersFilmsSearched, matchedMovies, userMatchedMovies])

  // console.log(JSON.parse(localStorage.getItem('matched-movies')))
  // console.log(localStorage.getItem('word'))
  // console.log(localStorage.getItem('checkbox'))

  // console.log(noResult)

  return { 
    matchedMovies, 
    showedMovies,
    userMatchedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isUsersFilmsSearched,
    isLoading,
    count, 
    setNoResult,
    setIsSearched,
    setIsUsersFilmsSearched,
    setMatchedMovies, 
    setUserMatchedMovies,
    setShortMovie, 
    filterMovies,
    filterSavedMovies,
    handleMoreButton,
  }
}

export default useMoviesSearch;