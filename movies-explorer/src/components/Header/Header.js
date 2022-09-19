import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, setLang, login }) {
  const location = useLocation();

  return (
    <header className={`header header_type_${location.pathname === '/' ? 'main' : ''}`}>
      <div className="header__container"> 
        <Link to='/' className="header__logo-link">
          <img className="logo" src={logo} alt="Логотип"></img>
        </Link>
        <Navigation 
          loggedIn={loggedIn} 
          setLang={setLang} 
          login={login}/> 
      </div>
    </header>
  );
}

export default Header;