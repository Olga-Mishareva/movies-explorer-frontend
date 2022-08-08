import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

function Auth({ children, title, name, submitBtn, question, path, link }) {
  return (
    <div className={`auth auth_type_${name}`}> 
      <div className={`auth__container auth__container_type_${name}`}>
        <form className={`auth__form auth__form_type_${name}`} name={name} id={name}>
          <img className="logo logo_type_auth" src={logo} alt="Логотип"></img>
          <h2 className={`auth__greeting auth__greeting_type_${name}`}>{title}</h2>
          {children}
        </form>
        <div className={`auth__submit-container auth__submit-container_type_${name}`}>
        <button className={`auth__submit-button auth__submit-button_type_${name}`} type='submit' form='register'
            disabled={false}>{submitBtn}</button>
          <div className={`auth__question auth__question_type_${name}`}>{question}
            <Link to={`/${path}`} className={`auth__link auth__link_type_${name}`}>{link}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;