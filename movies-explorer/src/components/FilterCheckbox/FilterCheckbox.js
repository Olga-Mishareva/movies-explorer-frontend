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

  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input className='filter__checkbox' type='checkbox' value='short' 
          checked={!shortMovie ? false : true} 
          onChange={toggleCheckbox}></input>
            Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;