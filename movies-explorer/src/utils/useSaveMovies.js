import { useState, useEffect } from 'react';
import { addMovie, getAddedMovies, removeMovie } from './MainApi';

function useSaveMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  function handleSaveMovie(data) {
    addMovie(data)
      .then(likedMovie => {                                   
        if (likedMovie) {
          getSavedMovies();
        }
        console.log(likedMovie)
      })
      .catch(err => console.log(err))  // popup!!
  }

  function handleRemoveMovie(movieId) {
    removeMovie(movieId)
      .then(res => {
        console.log(res)
        setSavedMovies(savedMovies.filter(movie => {
          return movie._id !== res._id;
        }))
      })
        
      .catch(err => console.log(err))  // popup!!
  }

  function getSavedMovies() {
    getAddedMovies()
      .then(movies => {
          setSavedMovies(movies);
      })
      .catch(err => console.log(err));   // popup!! 
  }

  return { savedMovies, handleSaveMovie, getSavedMovies, handleRemoveMovie }
}

export default useSaveMovies;