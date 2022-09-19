import { useState, useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Register.css';

function Register({ onRegister, isConfirm, isDisabled }) {
  const [ lang ] = useContext(LanguageContext);
  const { error, isValid, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value});
  }

  return (
    <Auth
      title={lang.registerGreeting} name='register' submitBtn={lang.register}
      question={lang.registered} path='signin' link={lang.login} 
      isValid={isValid} registerData={userData} isConfirm={isConfirm}
      onRegister={onRegister} checkErrors={checkErrors}>

      <FormInput name='username' type='text' label={lang.profileName} minLength='2' maxLength='30'
        placeholder={lang.placeholderName}
        isDisabled={isDisabled}
        setUserData={handleUserData}/>
      <span className='register__error'>{error.username}</span>

      <FormInput name='email' type='email' label='Email'
        placeholder={lang.placeholderEmail}
        isDisabled={isDisabled}
        setUserData={handleUserData}/>
      <span className='register__error'>{error.email}</span>

      <FormInput name='password' type='password' label={lang.password} minLength='4'
        placeholder={lang.placeholderPassword}
        isDisabled={isDisabled}
        setUserData={handleUserData}/>
      <span className='register__error'>{error.password}</span>
    </Auth>
  );
}

export default Register;