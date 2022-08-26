import { useEffect } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovie, setShortMovie }) {

  function toggleCheckbox(e) {
    if (e.target.checked) {
      setShortMovie(true)
    }
    else {
      setShortMovie(false);
    }
  }

  console.log(shortMovie) // правильное значение

  useEffect(() => {
    localStorage.setItem('checkbox', shortMovie);
    console.log(localStorage.getItem('checkbox')) // правильное значение
  }, [shortMovie])

  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input className='filter__checkbox' type='checkbox' value='short' 
          // checked={shortMovie ? true : false} // не работает, всегда checked
          onClick={toggleCheckbox}></input>
            Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;