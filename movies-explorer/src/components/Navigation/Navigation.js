import { Link, NavLink } from "react-router-dom";
import './Navigation.css';
import userIcon from '../../images/user-icon.svg';

function Navigation() {
  return (
    <div className="navigation">
      {/* navigation_invisible добавл. состоянием, если залогинен */}
      <nav className="navigation navigation_type_logged-out navigation_ "> 
        <Link to="/signup" className="navigation__link navigation__link_type_register">Регистрация</Link>
        <Link to="/signin" className="navigation__link navigation__link_type_login">Войти</Link>
      </nav>
      {/* background-image меняется состоянием при нажатии, invisible добавл. если не залог. */}
      <button className="navigation__button navigation__button_invisible " type="button"></button> 
      {/* overlay_invisible добавляется состоянием при нажатии на navigation__button, меню скрывается */}
      <div className="overlay overlay_invisible "> 
        {/* navigation_invisible добавл. состоянием, если не залогинен */}
        <nav className="navigation navigation_type_logged-in navigation_invisible"> 
          <div className="navigation__container">
            <NavLink to="/" className='navigation__link navigation__link_type_home'>Главная</NavLink>
            <NavLink to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation__link navigation__link_type_saved-movies">Сохранённые фильмы</NavLink>
          </div>
          <NavLink to="/profile" className="navigation__link navigation__link_type_profile">
            <span className="navigation__user-profile">Аккаунт</span>
            <img className="navigation__user-icon" src={userIcon} alt="Иконка пользователя"></img>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;