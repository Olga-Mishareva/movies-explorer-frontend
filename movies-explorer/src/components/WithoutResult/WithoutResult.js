import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './WithoutResult.css';

function WithoutResult() {
  const [ lang ] = useContext(LanguageContext);

  return (
    <div className='no-result'> 
      <p className='no-result__text'>{lang.noResults}</p>
    </div>
  );
}

export default WithoutResult;