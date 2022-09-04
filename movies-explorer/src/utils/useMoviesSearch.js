import { useState, useEffect } from 'react';
import useResize from './useResize';
import useLocalStorage from './useLocalStorage';

function useMoviesSearch() {
  const { width, count, row } = useResize();
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]); 
  const [userMatchedMovies, setUserMatchedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isUsersFilmsSearched, setIsUsersFilmsSearched] = useState(false);

  const [storageMovies, setStorageMovies] = useLocalStorage([], 'movies');
  const [storageCheckbox, setStorageCheckbox] = useLocalStorage('', 'checkbox');
  const [storageWord, setStorageWord] = useLocalStorage('', 'word');

  useEffect(() => {                                                                  
        setMatchedMovies(storageMovies); 
        setShortMovie(storageCheckbox);
  }, []);

  function filterMovies(word, filmsCollection) {
    const searchWord = word.replace(/\s\s+/g, ' ').replace(/^\s+|\s+$/g, '')
    setStorageWord(searchWord);
    const regex = new RegExp(`${searchWord}`, 'i'); 

    if (shortMovie) {
      const shortFilmList = filmsCollection.filter(movie => {
        if (Object.values(movie).every(item => item !== null)) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) && movie.duration <= 40;
        }
      })
      setMatchedMovies(shortFilmList);
      setStorageMovies(shortFilmList);
      setStorageCheckbox(shortMovie);
    }
    else {
      const filmList = filmsCollection.filter(movie => {
        if (Object.values(movie).every(item => item !== null)) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) ;
        }    
      })
      setMatchedMovies(filmList);
      setStorageMovies(filmList);
      setStorageCheckbox('');
    }
    setIsSearched(true);
  }  

  function filterSavedMovies(word, usersCollection) {
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
    if (isSearched && !matchedMovies[0]) {
      setNoResult(true);
      return;
    }
    if (isUsersFilmsSearched && !userMatchedMovies[0]) {
      setNoResult(true);
      return;
    }
    else setNoResult(false);
  }, [isSearched, isUsersFilmsSearched, matchedMovies, userMatchedMovies])

  return { 
    matchedMovies, 
    showedMovies,
    userMatchedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isUsersFilmsSearched,
    storageWord,
    storageCheckbox,
    setIsUsersFilmsSearched,
    setUserMatchedMovies,
    setShortMovie, 
    filterMovies,
    filterSavedMovies,
    handleMoreButton,
  }
}

export default useMoviesSearch;