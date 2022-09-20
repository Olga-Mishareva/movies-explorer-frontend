import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useLocation } from 'react-router-dom';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import './MoviesCard.css';

function MoviesCard({ movie, onSave, onRemove }) {
  const savedMovies = useContext(SavedMoviesContext);
  const [ lang ] = useContext(LanguageContext);
  const { pathname } = useLocation();
  const [film, setFilm] = useState(movie);
  const [liked, setLiked] = useState(false);
  const [time, setTime] = useState({});

  useEffect(() => {
    setLiked(false);
    savedMovies.forEach(savedMovie => {
      if (film.id === savedMovie.movieId || film.movieId === savedMovie.movieId) {
        setLiked(true);
        setFilm(savedMovie);
      }
    })
  }, [savedMovies]);

  useEffect(() => {
    setTime({
      hours: Math.floor(film.duration / 60),
      minutes: film.duration % 60
    });
  }, [film]);

  function handleLikeState() {
    liked ?
    onRemove({ id: film._id }) :
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
  }

  return (
    <li className='card'> 
      <a className='card__link' href={film.trailerLink} rel='noreferrer' target='_blank'>
        <img className='card__image' 
          src={!film.image.url ? film.image : `https://api.nomoreparties.co/${film.image.url}`} 
          alt='Poster of movie'>
        </img>
      </a>
      <div className='card__container'>
        <h2 className='card__title'>{lang.language === 'ru' ? film.nameRU : film.nameEN}</h2>
        <button className={`card__like 
          card__like_type_${pathname === '/saved-movies' ? 'saved' : liked ? 'liked' : ''}`} 
          type='button' onClick={handleLikeState}></button>
      </div>
      <p className='card__duration'>
        {`${time.hours !== 0 ? time.hours + 'ч': ''}
        ${time.minutes !== 0 ? time.minutes + 'м' : ''}`}
      </p>
    </li>
  );
}

export default MoviesCard;