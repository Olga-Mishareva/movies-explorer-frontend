import './MoviesCard.css';
import movieImage from '../../images/movie_jakob-owens.jpg';

function MoviesCard() {
  return (
    <li className='card'> 
      <img className='card__image' src={movieImage} alt='#'></img>
      <div className='card__container'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        <button className='card__like movie__like_type_saved' type='button'></button> {/* модификаторы liked / saved */}
      </div>
      <p className='card__duration'>1ч42м</p>
     
    </li>
  );
}

export default MoviesCard;