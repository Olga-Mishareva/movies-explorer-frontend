import './MoviesCard.css';
import movieImage from '../../images/movie_jakob-owens.jpg';

function MoviesCard() {
  return (
    <li className='movie'> 
      <img className='movie__image' src={movieImage} alt='#'></img>
      <div className='movie__container'>
        <h2 className='movie__title'>33 слова о дизайне</h2>
        <button className='movie__like movie__like_type_saved' type='button'></button> {/* модификаторы liked / saved */}
      </div>
      <p className='movie__duration'>1ч42м</p>
     
    </li>
  );
}

export default MoviesCard;