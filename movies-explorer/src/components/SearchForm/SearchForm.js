import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { SEARCH_WORD_REGEX } from '../../constants/config';
import useValidation from '../../utils/useValidation';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, filmsList, shortMovie, storageWord, setShortMovie }) {
  const { error, isValid, checkErrors, setError, setIsValid } = useValidation();
  const { pathname } = useLocation();
  const inputRef = useRef();
  const [value, setValue] = useState({});

  useEffect(() => {                           // нужно вынести!!!
    if (pathname === '/movies'){
      setValue({ search: storageWord });
      // setValue({search: localStorage.getItem('word')});
    }
  }, []);

  useEffect(() => { 
    console.log(value.search)
    if (value.search || value.search === '') {
      checkErrors(inputRef.current); 
    } 
    console.log(isValid)
    if (value.search && isValid) {
      onSearch(value.search, filmsList);
    }
    if (pathname === '/movies' && value.search === storageWord) {
      onSearch(value.search, filmsList);
    }
  }, [shortMovie]);

  

  function handleInputValue(e) {
    setError({});
    setIsValid(true);
    setValue({ search: e.target.value });
  }

  function handleFocus(e) {
    e.target.select();
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkErrors(inputRef.current);
    if (isValid && value.search) {
      onSearch(value.search, filmsList);
    }
  }

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
          <FilterCheckbox shortMovie={shortMovie} setShortMovie={setShortMovie}/>
        </form>
      </div> 
      
    </section>
  );
}

export default SearchForm;