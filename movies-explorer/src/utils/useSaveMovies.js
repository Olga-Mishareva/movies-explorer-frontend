import { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
import { addMovie, getAddedMovies, removeMovie } from './MainApi';

function useSaveMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);  // remove
  // const [liked, setLiked] = useState(false);

  function handleSaveMovie(data) {
    addMovie(data)
      .then(likedMovie => {
        // console.log(showedMovies)
        // console.log(likedMovie)
        setSavedMovies([...savedMovies, likedMovie])
      })
      .catch(err => console.log(err))  // popup!!
  }

  function handleRemoveMovie(movieId) {
    // console.log(movieId)
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

  // console.log(savedMovies)


  return { savedMovies, likedMovies, setSavedMovies, handleSaveMovie, getSavedMovies, handleRemoveMovie }
}

export default useSaveMovies;