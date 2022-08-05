import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header header_logged-in"> {/* logged-in добавляется если залогинен */}
      <div className="header__container"> 
        <Link exact to='/' className="header__logo-link"><img className="logo" src={logo} alt="Логотип"></img></Link>
        <Navigation /> 
      </div>
    </header>
  );
}

export default Header;