import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header"> 
      <div className="header__container"> {/* background-color меняется состоянием если залогинен */}
        <Link exact to='/' ><img className="logo" src={logo} alt="Логотип"></img></Link>
        <Navigation /> 
      </div>
    </header>
  );
}

export default Header;