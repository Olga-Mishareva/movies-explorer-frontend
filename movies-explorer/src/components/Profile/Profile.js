import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <form className='profile__form' name='profile' id='profile'>
        <h2 className='profile__greeting'>Привет, Оля!</h2>
        <label className='profile__label profile__label_type_name'>Имя
          <input className='profile__input profile__input_type_name' type='text' value={''} placeholder='Оля'
            required minLength="2" maxLength="30" disabled={false}></input>
        </label>
        <label className='profile__label profile__label_type_email'>Email
          <input className='profile__input profile__input_type_email' type='email' value={''} placeholder='om@gmail.com'
            required disabled={false}></input>
        </label>
      </form>
      <div className='profile__edit-container'>
        <span className='profile__error profile__error_invisible'>При обновлении профиля произошла ошибка.</span>
        <button className='profile__button profile__button_type_submit profile__button_' type='submit' form='profile' disabled={false}>Сохранить</button>
        <button className='profile__button profile__button_type_edit profile__button_invisible' type='button'>Редактировать</button>
        <button className='profile__button profile__button_type_logout profile__button_invisible' type='button'>Выйти из аккаунта</button>
      </div>
      
    </section>
  );
}

export default Profile;