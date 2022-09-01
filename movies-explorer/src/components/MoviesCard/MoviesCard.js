import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import './MoviesCard.css';

function MoviesCard({ movie, showedMovies, savedMovies, userMatchedMovies, isUsersFilmsSearched, onSave, onRemove, getSavedMovies }) {
  const location = useLocation();
  
  const [film, setFilm] = useState(movie);
  const [liked, setLiked] = useState(false);
  const [time, setTime] = useState({});

  // console.log(liked)  
  

  useEffect(() => {
    setTime({
          hours: Math.floor(film.duration / 60),
          minutes: film.duration % 60
        });
  }, [film]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      savedMovies.forEach(savedMovie => {
        if (film.id === savedMovie.movieId || film.movieId === savedMovie.movieId) {
          setLiked(true);
          setFilm(savedMovie);
        }
      })
    }
  }, [savedMovies])



  function handleLike(e) {
    setLiked(true);
    onSave({ 
      country: film.country,
      director: film.director, 
      duration: film.duration, 
      year: film.year, 
      description: film.description,
      image: film._id ? film.image : `https://api.nomoreparties.co/${film.image.url}`, 
      trailerLink: film.trailerLink, 
      nameRU: film.nameRU, 
      nameEN: film.nameEN, 
      thumbnail: film._id ? film.thumbnail : `https://api.nomoreparties.co/${film.image.formats.thumbnail.url}`, 
      movieId: film._id ? film.movieId : film.id,
    });
    // getSavedMovies();
    
  }

  function handleDislike() {  // из userMatchedMovies удаляется, но не отрисовывается
      savedMovies.forEach(savedMovie => {
        if (savedMovie.movieId === film.id || savedMovie.movieId === film.movieId) {
          setLiked(false);
          onRemove({ id: film._id });
        }
      });
  }

  return (
    <li className='card'> 
      <img className='card__image' src={!film.image.url ? film.image : `https://api.nomoreparties.co/${film.image.url}`} alt='Изображение к фильму'></img>
      <div className='card__container'>
        <h2 className='card__title'>{film.nameRU}</h2>
        <button className={`card__like 
          card__like_type_${location.pathname === '/saved-movies' ? 'saved' : liked ? 'liked' : ''}`} 
          type='button' onClick={liked || location.pathname === '/saved-movies' ? handleDislike : handleLike}></button>
      </div>
      <p className='card__duration'>{`${time.hours !== 0 ? time.hours + 'ч': ''}${time.minutes !== 0 ? time.minutes + 'м' : ''}`}</p>
     
    </li>
  );
}

export default MoviesCard;