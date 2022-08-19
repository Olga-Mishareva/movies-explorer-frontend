import { useState, useEffect } from "react";
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Login.css';

function Login({ loggedIn, onLogin }) {
  const { error, isValid, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value});
  }

  return (
    <Auth 
      title='Рады видеть!' name='login' submitBtn='Войти' 
      question='Еще не зарегистрированы?' path='signup' link='Регистрация'
      loggedIn={loggedIn} isValid={isValid} loginData={userData} 
      onLogin={onLogin} checkErrors={checkErrors}>  {/* нужно ли передавать loggedIn */}

      <FormInput name='email' type='email' label='Email' 
        placeholder='Введите ваш email'
        setUserData={handleUserData} />
      <span className='login__error'>{error.email}</span>

      <FormInput name='password' type='password' label='Пароль' minLength='4'
        placeholder='Введите ваш пароль'
        setUserData={handleUserData} />
      <span className='login__error'>{error.password}</span>
    </Auth>
  );
}

export default Login;