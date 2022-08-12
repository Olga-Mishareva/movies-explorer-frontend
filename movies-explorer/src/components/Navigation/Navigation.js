import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';
import userIcon from '../../images/user-icon.svg';

function Navigation({ loggedIn,login }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }


  return (
    <div className="nav">
  
      <nav className={`nav nav_type_logged-out nav_${loggedIn ? 'invisible' : ''}`}> 
        <NavLink to="/signup" className="nav__link nav__link_type_register">
          Регистрация
        </NavLink>
        <NavLink to="/signin" className="nav__link nav__link_type_login" onClick={login}>
          Войти
        </NavLink>
      </nav>

      <button className={`nav__button nav__button_type_${!menuIsOpen ? 'burger' : 'close'} 
        nav__button_${loggedIn ? '' : 'invisible'}`} 
        type="button" onClick={handleMenu}></button>    
      <div className={`nav__side-menu nav__side-menu_${menuIsOpen ? '' : 'invisible'}`}> 
        <nav className={`nav nav_type_logged-in nav_${loggedIn ? '' : 'invisible'}`}> 
          <div className="nav__container">
            <NavLink to="/" className='nav__link nav__link_type_home' 
              onClick={handleMenu}>
                Главная
            </NavLink>
            <NavLink to="/movies" className="nav__link nav__link_type_movies"
              onClick={handleMenu}>
                Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="nav__link nav__link_type_saved-movies" 
              onClick={handleMenu}>
                Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink to="/profile" className="nav__link nav__link_type_profile" 
            onClick={handleMenu}>
              Аккаунт
            <img className="nav__user-icon" src={userIcon} alt="Иконка пользователя"></img>
          </NavLink>
        </nav>

      </div>
    </div>
  );
}

export default Navigation;