import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className='login'> 
      <div className='login__container'>
        
        <form className='login__form' name='login' id='login'>
          <img className="logo logo_type_auth" src={logo} alt="Логотип"></img>
          <h2 className='login__greeting'>Рады видеть!</h2>

          <label className='login__label login__label_type_email'>Email
            <input className='login__input login__input_type_email login__input_type_error' 
              type='email' name='email' required></input>  {/* value={} */}
          </label>
          <span className='login__error'>Что-то пошло не так...</span>
          <label className='login__label login__label_type_password'>Пароль
            <input className='login__input login__input_type_password login__input_type_' 
              type='password' name='password' required></input> {/* если состояние ошибки валидации !== {}, добавить класс error*/}
          </label>
          <span className='login__error'>{}</span>
        </form>
        <div className='login__submit-container'>
        <button className='login__submit-button' type='submit' form='register'
            disabled={false}>Войти</button>
          <div className='login__question'>Ещё не зарегистрированы?
            <Link to='/signup' className='login__register-link'>Регистрация</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;