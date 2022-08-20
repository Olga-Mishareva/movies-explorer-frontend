import { useState, useContext, useEffect, useRef } from 'react';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import { userNameRegex } from '../../constants/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({ onLogout, onUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const { error, isValid, setError, setIsValid, checkErrors } = useValidation();
  const inputRef = useRef();

  const [inputIsDisabled, setInputIsDisabled] = useState(true);
  const [isInputValid, setIsInputValid] = useState(true);
  const [value, setValue] = useState({});

  useEffect(() => {
    setValue(currentUser);
  }, []);
  
  function handleInput() {
    setInputIsDisabled(false);
    setIsValid(false);
  }

  function handleCansel() {
    setValue(currentUser);
    setError({});
    setIsInputValid(true);
    setInputIsDisabled(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(value)
    onUpdate({ name: value.username, email: value.email });
    setInputIsDisabled(true);
  }

  function handleLogout() {
    onLogout(currentUser.email);
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

  function handleFocus(e) {
    e.target.select();
  }

  return (
    <section className='profile'>

      <form className='profile__form' 
        name='profile' id='profile'
        
        onChange={checkErrors} onSubmit={handleSubmit} >
        <h2 className='profile__greeting'>Привет, Оля!</h2>
        <label className='form-input__label form-input__label_type_profile'>Имя
          <input className={`form-input__input form-input__input_type_profile
            form-input__input_type_${isInputValid ? '' : 'error'}`} 
            ref={inputRef}
            name='username' 
            type='text'
            minLength='2'
            maxLength='30'
            required
            placeholder='Новое имя' 
            pattern={userNameRegex} 
            disabled={inputIsDisabled}
            onFocus={handleFocus} 
            onChange={handleInputValue}
            value={value.username || ''}>
          </input> 
        </label>
        <label className='form-input__label form-input__label_type_profile'>Email
          <input className={`form-input__input form-input__input_type_profile
            form-input__input_type_${isInputValid ? '' : 'error'}`} 
            ref={inputRef}
            name='email' 
            type='email'
            required
            placeholder='Новый email' 
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
            Сохранить
        </button>
        <button className={`profile__button profile__button_type_cancel 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} 
          type='button' 
          onClick={handleCansel}>
            Отмена
        </button>
        <button className={`profile__button profile__button_type_edit 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} 
          type='button' 
          onClick={handleInput}>
            Редактировать
        </button>
        <button className={`profile__button profile__button_type_logout 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} 
          type='button' 
          onClick={handleLogout}>
            Выйти из аккаунта
        </button>
      </div>

    </section>
  );
}

export default Profile;