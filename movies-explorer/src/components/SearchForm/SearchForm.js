import { useState, useEffect, useRef } from 'react';
import { SEARCH_WORD_REGEX } from '../../constants/config';
import useValidation from '../../utils/useValidation';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, filmsCollection }) {
  const { error, isValid, checkErrors } = useValidation();
  const inputRef = useRef();
  const [value, setValue] = useState({});

  function handleInputValue(e) {
    setValue({ search: e.target.value });
    checkErrors(inputRef.current);
  }

  function handleFocus(e) {
    e.target.select();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onSearch(value.search, filmsCollection);
    }
  }

  // console.log(inputRef.current)

  return (
    <section className="search"> 
      <div className='search__container'>
        <form className="search__form" 
          name='search'
          action='#' 
          method='post'
          noValidate
          onSubmit={handleSubmit}> 
          <div className='search__line'>
            <input className='search__input' 
              ref={inputRef}
              type='search' 
              name='search' 
              placeholder='Фильм' 
              required
              pattern={SEARCH_WORD_REGEX}
              value={value.search || ''}
              onFocus={handleFocus}
              onChange={handleInputValue}>
            </input>
            <button className='search__submit-btn' type='submit'></button>
          </div>
          <span className='search__error'>{error.search}</span>
          <FilterCheckbox />
        </form>
      </div> 
      
    </section>
  );
}

export default SearchForm;