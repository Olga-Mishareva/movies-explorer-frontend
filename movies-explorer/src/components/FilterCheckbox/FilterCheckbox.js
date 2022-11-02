import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovie, setShortMovie, onCheck, value, isValid }) {
  const [ lang ] = useContext(LanguageContext);

  useEffect(() => {
    if (isValid) {
      onCheck();
    }
  }, [value]);

  function toggleCheckbox(e) {
    if (isValid) {
      if (e.target.checked) {
        setShortMovie(true);
      }
      else {
        setShortMovie(false);
      }
    }
  }

  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input className='filter__checkbox' type='checkbox' value='short' 
          checked={!shortMovie ? false : true} 
          onChange={toggleCheckbox}></input>
            {lang.shortMovies}
      </label>
    </div>
  );
}

export default FilterCheckbox;