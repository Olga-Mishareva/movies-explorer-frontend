import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <div className="header"> {/* background-color меняется состоянием если не залогинен */}
      <div className="header__container">
        <img className="logo" src={logo} alt="Логотип"></img>
        <Navigation /> 
      </div>
    </div>
  );
}

export default Header;