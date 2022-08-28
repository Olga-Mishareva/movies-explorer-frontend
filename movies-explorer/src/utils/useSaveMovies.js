import { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
import { addMovie, getAddedMovies } from './MainApi';

function useSaveMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  function handleSaveMovie(data) {
    // console.log(movie)

    addMovie(data)
      .then(movie => {
        // setSavedMovies([movie]);
        console.log(movie)
      })
      .catch(err => console.log(err))  // popup!!
  }

  function getSavedMovies() {
    getAddedMovies()
      .then(movies => {
        console.log(movies)
        setSavedMovies(movies)
      })
      .catch(err => console.log(err))  // popup!!
  }

  console.log(savedMovies)


  return { savedMovies, setSavedMovies, handleSaveMovie, getSavedMovies }
}

export default useSaveMovies;