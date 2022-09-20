import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import LangSelect from '../LangSelect/LangSelect';
import userIcon from '../../images/user-icon.svg';
import './Navigation.css';

function Navigation({ loggedIn, setPageLang, login }) {
  const [ lang ] = useContext(LanguageContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className='nav'>

      <button className={`nav__button nav__button_type_${!menuIsOpen ? 'burger' : 'close'} 
        nav__button_${loggedIn ? '' : 'invisible'}`} 
        type='button' onClick={handleMenu}></button>    
      <div className={`nav__overlay nav__overlay_${!menuIsOpen ? 'invisible' : ''}`}></div>
  
      <nav className={`nav nav__outside nav_${loggedIn ? 'invisible' : ''}`}> 
        <LangSelect 
        loggedIn={loggedIn} 
        setPageLang={setPageLang}
        menuIsOpen={menuIsOpen}/>

        <NavLink to='/signup' className='nav__link nav__link_type_register'>
          {lang.register}
        </NavLink>
        <NavLink to='/signin' className='nav__link nav__link_type_login' onClick={login}>
          {lang.login}
        </NavLink>
      </nav>

      <nav className={`nav nav__inside nav__inside_${!menuIsOpen ? 'closed' : ''}
        nav_${loggedIn ? '' : 'invisible'}`}> 
        <div className='nav__container'>
          <NavLink to='/' className='nav__link nav__link_type_home' 
            onClick={menuIsOpen ? handleMenu: null}>
              {lang.homePage}
          </NavLink>
          <NavLink to='/movies' className='nav__link nav__link_type_movies'
            onClick={menuIsOpen ? handleMenu: null}>
              {lang.movies}
          </NavLink>
          <NavLink to='/saved-movies' className='nav__link nav__link_type_saved-movies' 
            onClick={menuIsOpen ? handleMenu: null}>
              {lang.savedMovies}
          </NavLink>
        </div>
        <div className='nav__wrapper'>
          <LangSelect 
            loggedIn={loggedIn} 
            setPageLang={setPageLang}
            menuIsOpen={menuIsOpen}/>

          <NavLink to='/profile' className='nav__link nav__link_type_profile' 
            onClick={menuIsOpen ? handleMenu: null}>
              {lang.profile}
            <img className='nav__user-icon' src={userIcon} alt='Иконка пользователя'></img>
          </NavLink>
        </div>
        
      </nav>

    </div>
  );
}

export default Navigation;