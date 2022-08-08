import Auth from '../Auth/Auth';
import './Login.css';

function Login() {

  return (
    <Auth 
      title='Рады видеть!' name='login' submitBtn='Войти' 
      question='Еще не зарегистрированы?' path='signup' link='Регистрация'>
      <label className='login__label login__label_type_email'>Email
        <input className='login__input login__input_type_email login__input_type_error' 
          type='email' name='email' required></input>  {/* value={} */}
      </label>
      <span className='login__error'></span>
      <label className='login__label login__label_type_password'>Пароль
        <input className='login__input login__input_type_password login__input_type_' 
          type='password' name='password' required></input> {/* если состояние ошибки валидации !== {}, добавить класс error*/}
      </label>
      <span className='login__error'></span>
    </Auth>
  );
}

export default Login;