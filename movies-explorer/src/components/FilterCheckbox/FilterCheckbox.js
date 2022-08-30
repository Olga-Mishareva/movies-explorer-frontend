import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovie, setShortMovie }) {
  const location = useLocation();
  

  function toggleCheckbox(e) {
    if (e.target.checked) {
      setShortMovie(true)
    }
    else {
      setShortMovie(false);
    }
  }

  // console.log(shortMovie) // правильное значение

  

  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input className='filter__checkbox' type='checkbox' value='short' 
          checked={!shortMovie ? false : true} // не работает, всегда checked
          onChange={toggleCheckbox}></input>
            Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;