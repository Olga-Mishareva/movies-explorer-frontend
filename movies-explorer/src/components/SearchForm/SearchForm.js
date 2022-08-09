import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search"> 
      <div className='search__container'>
        <form className="search__form" action='#' method='post'> 
          <div className='search__line'>
            <input className='search__inpup' type='search' name='search' placeholder='Фильм' autoComplete required></input>
            <button className='search__submit-btn' type='submit'></button>
          </div>
          <FilterCheckbox />
        </form>
      </div> 
      
    </section>
  );
}

export default SearchForm;