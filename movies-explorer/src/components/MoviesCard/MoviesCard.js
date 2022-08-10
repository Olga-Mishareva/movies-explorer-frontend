import { useState } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import movieImage from '../../images/movie_jakob-owens.jpg';

function MoviesCard() {
  const location = useLocation();
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <li className='card'> 
      <img className='card__image' src={movieImage} alt='#'></img>
      <div className='card__container'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        <button className={`card__like 
          card__like_type_${location.pathname === '/saved-movies' ? 'saved' : liked ? 'liked' : ''}`} 
          type='button' onMouseDown={handleLike}></button>
      </div>
      <p className='card__duration'>1ч42м</p>
     
    </li>
  );
}

export default MoviesCard;