import './FilterCheckbox.css';

function FilterCheckbox({ setShortMovie }) {

  function toggleCheckbox(e) {
    if (e.target.checked) {
      setShortMovie(true)
    }
    else setShortMovie(false);
  }


  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input className='filter__checkbox' type='checkbox' value='no' onChange={toggleCheckbox}></input>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;