import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Profile.css';

function Profile({ logout }) {
  const { error, isValid, checkErrors } = useValidation();
  const [inputIsDisabled, setInputIsDisabled] = useState(true);
  
  function handleInput() {
    setInputIsDisabled(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputIsDisabled(true);
  }

  return (
    <section className='profile'>

      <form className='profile__form' 
        name='profile' 
        id='profile'
        onChange={checkErrors}>
        <h2 className='profile__greeting'>Привет, Оля!</h2>
        <FormInput 
          name='username' type='text' sort='profile' label='Имя' minLength="2" maxLength="30"
          placeholder='Новое имя' disabled={inputIsDisabled}/>
        <FormInput 
          name='email' type='email' sort='profile' label='Email'
          placeholder='Новый email' disabled={inputIsDisabled}/>
      </form>

      <div className='profile__edit-container'>
        <span className='profile__error'>{(error.username || '') + ' ' + (error.email || '')}</span>
        <button className={`profile__button profile__button_type_submit 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} 
          type='submit' 
          form='profile' 
          onSubmit={handleSubmit} 
          disabled={!isValid}>
            Сохранить
        </button>
        <button className={`profile__button profile__button_type_cancel 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} 
          type='button' 
          onMouseDown={() => setInputIsDisabled(true)}>
            Отмена
        </button>
        <button className={`profile__button profile__button_type_edit 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} 
          type='button' 
          onMouseDown={handleInput}>
            Редактировать
        </button>
        <button className={`profile__button profile__button_type_logout 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} 
          type='button' 
          onMouseDown={logout}>
            Выйти из аккаунта
        </button>
      </div>

    </section>
  );
}

export default Profile;