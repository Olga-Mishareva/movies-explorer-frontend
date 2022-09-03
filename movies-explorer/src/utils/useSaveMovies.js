import { useState } from 'react';
import { addMovie, getAddedMovies, removeMovie } from './MainApi';

function useSaveMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMoviePopupOpen, setIsMoviePopupOpen] = useState(false);
  const [movieError, setMovieError] = useState('');

  function handleSaveMovie(data) {
    addMovie(data)
      .then(likedMovie => {                                   
        if (likedMovie) {
          getSavedMovies();
        }
        console.log(likedMovie)
      })
      .catch(err => {
        setMovieError(err.message);
        setIsMoviePopupOpen(true);
      });
  }

  function handleRemoveMovie(movieId) {
    removeMovie(movieId)
      .then(res => {
        console.log(res)
        setSavedMovies(savedMovies.filter(movie => {
          return movie._id !== res._id;
        }));
      })
      .catch(err => {
        setMovieError(err.message);
        setIsMoviePopupOpen(true);
      });
  }

  function getSavedMovies() {
    getAddedMovies()
      .then(movies => {
          setSavedMovies(movies);
      })
      .catch(err => {
        setMovieError(err.message);
        setIsMoviePopupOpen(true);
      });
  }

  return { savedMovies, isMoviePopupOpen, movieError, setIsMoviePopupOpen, handleSaveMovie, getSavedMovies, handleRemoveMovie }
}

export default useSaveMovies;