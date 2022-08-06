import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className='register'> 
      <div className='register__container'>
        
        <form className='register__form' name='register' id='register'>
          <img className="logo logo_type_auth" src={logo} alt="Логотип"></img>
          <h2 className='register__greeting'>Добро пожаловать!</h2>
          <label className='register__label register__label_type_name'>Имя
            <input className='register__input register__input_type_name register__input_type_' type='text'
              name='username' required minLength="2" maxLength="30"></input> {/* value={} */}
              <span className='register__error'>{}</span>
          </label>
          <label className='register__label register__label_type_email'>Email
            <input className='register__input register__input_type_email register__input_type_' type='email'
              name='email' required></input>
              <span className='register__error'>{}</span>
          </label>
          <label className='register__label register__label_type_password'>Пароль
            <input className='register__input register__input_type_password register__input_type_' type='password'
              name='password' required></input> {/* если состояние ошибки !== {}, добавить класс error*/}
              <span className='register__error'>{}</span>
          </label>
        </form>
        <div className='register__submit-container'>
          <button className='register__button register__button_type_submit' type='submit' form='register'
            disabled={false}>Зарегистрироваться</button>
          <label className='register__question'>Уже зарегистрированы?
            <button className='register__button register__button_type_login' type='button'>Войти</button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Register;