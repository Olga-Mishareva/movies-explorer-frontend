import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../utils/useValidation';
import './Login.css';

function Login({ loggedIn, login }) {
  const { error, isValid, checkErrors } = useValidation();

  return (
    <Auth 
      title='Рады видеть!' name='login' submitBtn='Войти' 
      question='Еще не зарегистрированы?' path='signup' link='Регистрация'
      loggedIn={loggedIn} login={login} isValid={isValid} checkErrors={checkErrors}>

      <FormInput name='email' type='email' label='Email' 
        placeholder='Введите ваш email'/>
      <span className='login__error'>{error.email}</span>

      <FormInput name='password' type='password' label='Пароль' minLength='4'
        placeholder='Введите ваш пароль'/>
      <span className='login__error'>{error.password}</span>
    </Auth>
  );
}

export default Login;