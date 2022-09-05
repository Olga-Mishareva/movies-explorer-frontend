import { useNavigate } from 'react-router-dom';
import './NoMatch.css';

function NoMatch() {
  let navigate = useNavigate();

  return (
    <div className='no-match'>
      <div className='no-match__container'>
        <h2 className='no-match__code'>404</h2>
        <p className='no-match__text'>Страница не найдена</p>
      </div>
      <button className='no-match__button' type='button' onClick={() => navigate('/', {replase: true})}>Назад</button>
    </div>
  );
}

export default NoMatch;