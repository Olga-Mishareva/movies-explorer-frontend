import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({ movie, onSave }) {
  const location = useLocation();
  const [liked, setLiked] = useState(false);
  const [time, setTime] = useState({});

  useEffect(() => {
    setTime({
          hours: Math.floor(movie.duration / 60),
          minutes: movie.duration % 60
        });
  }, [movie]);

  function handleLike() {
    setLiked(!liked);
    if (movie.nameEN) {
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
    }
  }



  // movie.country || 
  // movie.director || 
  // movie.duration || 
  // movie.nameEN || movie.year || movie.description || 
  // movie.image.url || movie.trailerLink || 
  // movie.image.formats.thumbnail.url || movie.id


  return (
    <li className='card'> 
      <img className='card__image' src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} alt='Изображение к фильму'></img>
      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <button className={`card__like 
          card__like_type_${location.pathname === '/saved-movies' ? 'saved' : liked ? 'liked' : ''}`} 
          type='button' onMouseDown={handleLike}></button>
      </div>
      <p className='card__duration'>{`${time.hours !== 0 ? time.hours + 'ч': ''}${time.minutes !== 0 ? time.minutes + 'м' : ''}`}</p>
     
    </li>
  );
}

export default MoviesCard;