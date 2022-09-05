import { useState } from "react";
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Login.css';

function Login({ onLogin }) {
  const { error, isValid, isDisabled, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value});
  }

  return (
    <Auth 
      title='Рады видеть!' name='login' submitBtn='Войти' 
      question='Еще не зарегистрированы?' path='signup' link='Регистрация'
      isValid={isValid} loginData={userData} 
      onLogin={onLogin} checkErrors={checkErrors}>

      <FormInput name='email' type='email' label='Email' 
        placeholder='Введите ваш email'
        isDisabled={isDisabled}
        setUserData={handleUserData} />
      <span className='login__error'>{error.email}</span>

      <FormInput name='password' type='password' label='Пароль' minLength='4'
        placeholder='Введите ваш пароль'
        isDisabled={isDisabled}
        setUserData={handleUserData} />
      <span className='login__error'>{error.password}</span>
    </Auth>
  );
}

export default Login;