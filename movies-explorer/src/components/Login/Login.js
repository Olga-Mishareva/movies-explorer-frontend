import { useState, useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Login.css';

function Login({ onLogin }) {
  const [ lang ] = useContext(LanguageContext);
  const { error, isValid, isDisabled, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value});
  }

  return (
    <Auth 
      title={lang.loginGreeting} name='login' submitBtn={lang.login} 
      question={lang.notRegistered} path='signup' link={lang.register}
      isValid={isValid} loginData={userData} 
      onLogin={onLogin} checkErrors={checkErrors}>

      <FormInput name='email' type='email' label='Email' 
        placeholder={lang.placeholderEmail}
        isDisabled={isDisabled}
        setUserData={handleUserData} />
      <span className='login__error'>{error.email}</span>

      <FormInput name='password' type='password' label={lang.password}
        minLength='4'
        placeholder={lang.placeholderPassword}
        isDisabled={isDisabled}
        setUserData={handleUserData} />
      <span className='login__error'>{error.password}</span>
    </Auth>
  );
}

export default Login;