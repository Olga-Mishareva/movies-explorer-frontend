import { useState, useEffect } from 'react';
import useResize from './useResize';
import { SHORT_FILM } from '../constants/config';
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
  const [isLoading, setIsLoading] = useState(false);

  const [storageMovies, setStorageMovies] = useLocalStorage([], 'movies');
  const [storageCheckbox, setStorageCheckbox] = useLocalStorage('', 'checkbox');
  const [storageWord, setStorageWord] = useLocalStorage('', 'word');

  useEffect(() => {                                                                  
        setMatchedMovies(storageMovies); 
        setShortMovie(storageCheckbox);
  }, []);

  function filterMovies(word, filmsCollection) {
    setIsLoading(true);
    const regex = handleSearchWord(word);
    const filmList = handleFilter(filmsCollection, regex);

    setStorageWord(word);
    setMatchedMovies(filmList);
    setStorageMovies(filmList);
    setStorageCheckbox(shortMovie ? 'true' : '');
    setIsSearched(true);
  }  

  function filterSavedMovies(word, usersCollection) {
    setIsLoading(true);
    const regex = handleSearchWord(word);
    const filmList = handleFilter(usersCollection, regex); 

    setUserMatchedMovies(filmList);
    setIsUsersFilmsSearched(true);
  }

  function handleFilter(movies, regex) {
    movies = movies.filter(movie => {
      if (Object.values(movie).every(item => item !== null)) {
        if (shortMovie) {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex)) && movie.duration <= SHORT_FILM;
        }
        else {
          return (movie.nameRU.match(regex) || movie.nameEN.match(regex));
        }
      } 
    });
    return movies;
  }

  function handleSearchWord(word) {
    const searchWord = word.replace(/\s\s+/g, ' ').replace(/^\s+|\s+$/g, '');
    return new RegExp(`${searchWord}`, 'i');
  }

  useEffect(() => {
      setShowedMovies(matchedMovies.slice(0, count * row));
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
      setIsLoading(false);
      return;
    }
    if (isUsersFilmsSearched && !userMatchedMovies[0]) {
      setIsLoading(false);
      return;
    }
    else setNoResult(false);
    setIsLoading(false);
  }, [isSearched, isUsersFilmsSearched, matchedMovies, userMatchedMovies]);

  return { 
    matchedMovies, 
    showedMovies,
    userMatchedMovies,
    shortMovie, 
    noResult, 
    isSearched, 
    isUsersFilmsSearched,
    isLoading,
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