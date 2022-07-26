import { useState, useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import useValidation from '../../utils/useValidation';
import { USER_NAME_REGEX } from '../../constants/config';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Profile.css';

function Profile({ onLogout, onUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const [ lang ] = useContext(LanguageContext);
  const location = useLocation();
  const { error, isValid, setError, setIsValid, checkErrors } = useValidation();

  const [inputIsDisabled, setInputIsDisabled] = useState(true);
  const [isInputValid, setIsInputValid] = useState(true);
  const [value, setValue] = useState({});

  useEffect(() => {
    if (location.pathname === '/profile') {
      setValue(currentUser);
    }
  }, [location]);
  
  function handleInput() {
    setInputIsDisabled(false);
    setIsValid(false);
  }

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
    if (e.target.checkValidity()) {
      setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
    }
  }

  useEffect(() => {
    if (value.username === currentUser.username && value.email === currentUser.email) {
      setIsValid(false);
    }
  }, [value]);

  function handleSubmit(e) {
    e.preventDefault();
    setInputIsDisabled(true);
    onUpdate({ name: value.username, email: value.email });
  }

  function handleCansel() {
    setValue(currentUser);
    setError({});
    setIsInputValid(true);
    setInputIsDisabled(true);
  }

  function handleLogout() {
    onLogout(currentUser.email);
  }

  function handleFocus(e) {
    e.target.select();
  }

  return (
    <section className='profile'>
      <form className='profile__form' 
        name='profile' id='profile'
        onChange={checkErrors} onSubmit={handleSubmit} >
        <h2 className='profile__greeting'>{`${lang.profileGreeting} ${currentUser.username}!`}</h2>
        <label className='form-input__label form-input__label_type_profile'>{lang.profileName}
          <input className={`form-input__input form-input__input_type_profile
            form-input__input_type_${isInputValid ? '' : 'error'}`} 
            name='username' 
            type='text'
            minLength='2'
            maxLength='30'
            required
            placeholder={lang.profileNewName} 
            pattern={USER_NAME_REGEX} 
            disabled={inputIsDisabled}
            onFocus={handleFocus} 
            onChange={handleInputValue}
            value={value.username || ''}>
          </input> 
        </label>
        <label className='form-input__label form-input__label_type_profile'>Email
          <input className={`form-input__input form-input__input_type_profile
            form-input__input_type_${isInputValid ? '' : 'error'}`} 
            name='email' 
            type='email'
            required
            placeholder={lang.profileNewEmail} 
            disabled={inputIsDisabled}
            onFocus={handleFocus} 
            onChange={handleInputValue}
            value={value.email || ''}>
          </input>
        </label>
      </form>

      <div className='profile__edit-container'>
        <span className='profile__error'>{(error.username || '') + ' ' + (error.email || '')}</span>
        <button className={`profile__button profile__button_type_submit 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} 
          type='submit' 
          form='profile' 
          disabled={!isValid}>
            {lang.saveBtn}
        </button>
        <button className={`profile__button profile__button_type_cancel 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} 
          type='button' 
          onClick={handleCansel}>
            {lang.canselBtn}
        </button>
        <button className={`profile__button profile__button_type_edit 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} 
          type='button' 
          onClick={handleInput}>
            {lang.editBtn}
        </button>
        <button className={`profile__button profile__button_type_logout 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} 
          type='button' 
          onClick={handleLogout}>
            {lang.logout}
        </button>
      </div>
    </section>
  );
}

export default Profile;