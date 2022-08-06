import { Link } from 'react-router-dom';
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
            <input className='register__input register__input_type_name register__input_type_' defaultValue='Оля'
              type='text' name='username' required minLength="2" maxLength="30"></input> {/* value={} */}
          </label>
          <span className='register__error'></span>
          <label className='register__label register__label_type_email'>Email
            <input className='register__input register__input_type_email register__input_type_error' defaultValue='om@gmail.c'
              type='email' name='email' required></input> {/* если состояние ошибки валидации !== {}, добавить класс error*/}
          </label>
          <span className='register__error'>Что-то пошло не так...</span>
          <label className='register__label register__label_type_password'>Пароль
            <input className='register__input register__input_type_password register__input_type_' defaultValue='111111' 
              type='password' name='password' required></input> 
          </label>
          <span className='register__error'></span>
        </form>
        <div className='register__submit-container'>
          <button className='register__submit-button' type='submit' form='register'
            disabled={false}>Зарегистрироваться</button>
          <div className='register__question'>Уже зарегистрированы?
            <Link to='/signin' className='register__login-link'>Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;