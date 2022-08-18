import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter"> 
      <label className='filter__title'>
        <input className='filter__checkbox' type='checkbox' value='no'></input>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;