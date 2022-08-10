import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

function Auth({ children, title, name, submitBtn, question, path, link, loggedIn, login }) {
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login();
    navigate('/');
  }


  return (
    <div className={`auth auth_type_${name}`}> 
      <div className={`auth__container auth__container_type_${name}`}>
        <form className={`auth__form auth__form_type_${name}`} name={name} id={name} noValidate onSubmit={handleSubmit}>
        <Link to='/' className="auth__link auth__link_type_logo">
          <img className="logo" src={logo} alt="Логотип"></img>
        </Link>
          <h2 className={`auth__greeting auth__greeting_type_${name}`}>{title}</h2>
          {children}
        </form>
        <div className={`auth__submit-container auth__submit-container_type_${name}`}>
        <button className={`auth__submit-button auth__submit-button_type_${name}`} type='submit' form={name}
            disabled={false}>{submitBtn}</button>   {/* validation */}
          <div className={`auth__question auth__question_type_${name}`}>{question}
            <Link to={`/${path}`} className={`auth__link auth__link_type_${name}`}>{link}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;