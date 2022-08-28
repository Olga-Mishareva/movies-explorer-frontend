import { useEffect, useRef } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovie, setShortMovie }) {
  const checkboxRef = useRef();

  // useEffect(() => {
  //   // if (checkboxRef.current) {
  //     if (shortMovie) {
  //       checkboxRef.current.checked = true;
  //     }
  //     else checkboxRef.current.checked = false;
  //   // }
  // }, [])

  function toggleCheckbox(e) {
    if (e.target.checked) {
      setShortMovie(true)
    }
    else {
      setShortMovie(false);
    }
  }

  // if (checkboxRef.current) {
  //   console.log(checkboxRef.current.checked)
  // }
  

  // console.log(shortMovie) // правильное значение

  useEffect(() => {
    localStorage.setItem('checkbox', shortMovie);
    // console.log(localStorage.getItem('checkbox')) // правильное значение
  }, [shortMovie])

  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input ref={checkboxRef} className='filter__checkbox' type='checkbox' value='short' 
          checked={!shortMovie ? false : true} // не работает, всегда checked
          onChange={toggleCheckbox}></input>
            Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;