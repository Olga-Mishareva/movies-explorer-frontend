import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({ movie, showedMovies, savedMovies, onSave, onRemove, getSavedMovies }) {
  const location = useLocation();
  // const [movie, setMovie] = useState(film);
  const [liked, setLiked] = useState(false);
  const [time, setTime] = useState({});


  // console.log(liked)

  useEffect(() => {
    setTime({
          hours: Math.floor(movie.duration / 60),
          minutes: movie.duration % 60
        });
  }, [movie]);

  useEffect(() => {
    // console.log(savedMovies)
    if (location.pathname === '/movies') {
      savedMovies.forEach(savedMovie => {
        // console.log(movie, savedMovie)
        if (movie.id === savedMovie.movieId) {
          setLiked(true);
        }
      })
      // savedMovies.map((savedMovie) => {
      //   if (movie.id === savedMovie.movieId) console.log(movie, savedMovie);
      //   return movie.id === savedMovie.movieId ? savedMovie : movie;
      // })
    }
  }, [])

  // console.log(movie)

  function handleLike(e) {
    setLiked(true);
    onSave({ 
      country: movie.country,
      director: movie.director, 
      duration: movie.duration, 
      year: movie.year, 
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`, 
      trailerLink: movie.trailerLink, 
      nameRU: movie.nameRU, 
      nameEN: movie.nameEN, 
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`, 
      movieId: movie.id,
    });
    getSavedMovies();

    savedMovies.map((savedMovie) => {
      // if (movie.id === savedMovie.movieId) console.log(movie, savedMovie);
      return movie.id === savedMovie.movieId ? savedMovie : movie;
    })

  }

  function handleDislike() {
    savedMovies.forEach(savedMovie => {
      // console.log(savedMovie)
      //   console.log(movie)
      // setClicked(false)
      if (savedMovie.movieId === movie.id || savedMovie.movieId === movie.movieId) {
        setLiked(false);
        onRemove({ id: savedMovie._id });
      }
      // if (!savedMovie[0]) {
      //   // onRemove({ movie. })
      // }
    })
    
  }

  return (
    <li className='card'> 
      <img className='card__image' src={!movie.image.url ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} alt='Изображение к фильму'></img>
      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <button className={`card__like 
          card__like_type_${location.pathname === '/saved-movies' ? 'saved' : liked ? 'liked' : ''}`} 
          type='button' onClick={liked || location.pathname === '/saved-movies' ? handleDislike : handleLike}></button>
      </div>
      <p className='card__duration'>{`${time.hours !== 0 ? time.hours + 'ч': ''}${time.minutes !== 0 ? time.minutes + 'м' : ''}`}</p>
     
    </li>
  );
}

export default MoviesCard;