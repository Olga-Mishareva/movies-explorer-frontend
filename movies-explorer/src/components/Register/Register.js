import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Register.css';

function Register({ loggedIn, login }) {
  const { error, isValid, checkErrors } = useValidation();

  return (
    <Auth
      title='Добро пожаловать!' name='register' submitBtn='Зарегистрироваться' 
      question='Уже зарегистрированы?' path='signin' link='Войти' 
      loggedIn={loggedIn} login={login} isValid={isValid} checkErrors={checkErrors}>

      <FormInput name='username' type='text' label='Имя' minLength="2" maxLength="30"
        placeholder='Как вас называть?'/>
      <span className='register__error'>{error.username}</span>

      <FormInput name='email' type='email' label='Email'
        placeholder='Ваш электронный ящик'/>
      <span className='register__error'>{error.email}</span>

      <FormInput name='password' type='password' label='Пароль'
        placeholder='Придумайте пароль'/>
      <span className='register__error'>{error.password}</span>
      </Auth>
  );
}

export default Register;