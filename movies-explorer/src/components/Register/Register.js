import Auth from '../Auth/Auth';
import './Register.css';

function Register() {
  return (
    <Auth
      title='Добро пожаловать!' name='register' submitBtn='Зарегистрироваться' 
      question='Уже зарегистрированы?' path='signin' link='Войти'>
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
      </Auth>
  );
}

export default Register;