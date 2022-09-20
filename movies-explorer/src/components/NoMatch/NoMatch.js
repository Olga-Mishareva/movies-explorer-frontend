import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import './NoMatch.css';

function NoMatch() {
  let navigate = useNavigate();
  const [ lang ] = useContext(LanguageContext);

  return (
    <div className='no-match'>
      <div className='no-match__container'>
        <h2 className='no-match__code'>404</h2>
        <p className='no-match__text'>{lang.noMatch}</p>
      </div>
      <button 
        className='no-match__button' 
        type='button' 
        onClick={() => navigate('/', {replase: true})}>
          {lang.goBack}
      </button>
    </div>
  );
}

export default NoMatch;