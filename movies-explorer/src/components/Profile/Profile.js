import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import './Profile.css';

function Profile({ logout }) {
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

      <form className='profile__form' name='profile' id='profile' noValidate>
        <h2 className='profile__greeting'>Привет, Оля!</h2>
        <FormInput name='name' type='text' sort='profile' label='Имя' 
          minLength="2" maxLength="30" disabled={inputIsDisabled}/>

        <FormInput name='email' type='email' sort='profile' label='Email' 
          disabled={inputIsDisabled}/>

        {/* <label className='profile__label profile__label_type_name'>Имя
          <input className='profile__input profile__input_type_name' type='text' defaultValue='Оля'
            required minLength="2" maxLength="30" disabled={inputIsDisabled}></input>
        </label>
        <label className='profile__label profile__label_type_email'>Email
          <input className='profile__input profile__input_type_email' type='email' defaultValue='om@gmail.com'
            required disabled={inputIsDisabled}></input>
        </label> */}
      </form>

      <div className='profile__edit-container'>
        <span className='profile__error'></span>
        
        <button className={`profile__button profile__button_type_submit 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} type='submit' form='profile' 
          onSubmit={handleSubmit} disabled={false}>Сохранить    {/* validation */}
        </button>
        <button className={`profile__button profile__button_type_cancel 
          profile__button_${inputIsDisabled ? 'invisible' : ''}`} type='button' 
          onMouseDown={() => setInputIsDisabled(true)}>Отмена
        </button>
        <button className={`profile__button profile__button_type_edit 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} type='button' 
          onMouseDown={handleInput}>Редактировать
        </button>
        <button className={`profile__button profile__button_type_logout 
          profile__button_${inputIsDisabled ? '' : 'invisible'}`} type='button' 
          onMouseDown={logout}>Выйти из аккаунта
        </button>
      </div>

    </section>
  );
}

export default Profile;