import { useState, useEffect } from "react";
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Register.css';

function Register({ loggedIn, onRegister, isConfirm }) {
  const { error, isValid, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmitState() {
    setIsSubmitted(true);
  }

  useEffect(() => {
    setIsSubmitted(false);
  }, [isValid]);

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value});
  }

  return (
    <Auth
      title='Добро пожаловать!' name='register' submitBtn='Зарегистрироваться' 
      question='Уже зарегистрированы?' path='signin' link='Войти' 
      loggedIn={loggedIn} isValid={isValid} registerData={userData}
      onRegister={onRegister} isConfirm={isConfirm} handleSubmitState={handleSubmitState} checkErrors={checkErrors}>   {/* нужно ли передавать loggedIn */}

      <FormInput name='username' type='text' label='Имя' minLength='2' maxLength='30'
        placeholder='Как вас называть?'
        isSubmitted={isSubmitted}
        setUserData={handleUserData} isValid={isValid}/>
      <span className='register__error'>{error.username}</span>

      <FormInput name='email' type='email' label='Email'
        placeholder='Вашв электронная почта'
        isSubmitted={isSubmitted}
        setUserData={handleUserData} isValid={isValid}/>
      <span className='register__error'>{error.email}</span>

      <FormInput name='password' type='password' label='Пароль' minLength='4'
        placeholder='Придумайте пароль'
        isSubmitted={isSubmitted}
        setUserData={handleUserData} isValid={isValid}/>
      <span className='register__error'>{error.password}</span>
    </Auth>
  );
}

export default Register;