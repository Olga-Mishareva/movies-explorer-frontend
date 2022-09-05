import { useState } from "react";
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Register.css';

function Register({ onRegister, isConfirm, isDisabled }) {
  const { error, isValid, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value});
  }

  return (
    <Auth
      title='Добро пожаловать!' name='register' submitBtn='Зарегистрироваться' 
      question='Уже зарегистрированы?' path='signin' link='Войти' 
      isValid={isValid} registerData={userData} isConfirm={isConfirm}
      onRegister={onRegister} checkErrors={checkErrors}>

      <FormInput name='username' type='text' label='Имя' minLength='2' maxLength='30'
        placeholder='Как вас называть?'
        isDisabled={isDisabled}
        setUserData={handleUserData}/>
      <span className='register__error'>{error.username}</span>

      <FormInput name='email' type='email' label='Email'
        placeholder='Ваша электронная почта'
        isDisabled={isDisabled}
        setUserData={handleUserData}/>
      <span className='register__error'>{error.email}</span>

      <FormInput name='password' type='password' label='Пароль' minLength='4'
        placeholder='Придумайте пароль'
        isDisabled={isDisabled}
        setUserData={handleUserData}/>
      <span className='register__error'>{error.password}</span>
    </Auth>
  );
}

export default Register;