import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { EN, RU, DE } from '../../constants/languages';
import './LangSelect.css';

function LangSelect({ loggedIn, setPageLang, menuIsOpen }) {
  const [ setLang ] = useContext(LanguageContext);
  const { pathname } = useLocation();

  function selectLang(e) {
    setPageLang(e.target.value);
    if (e.target.value === DE.language) setLang(DE);
    else if (e.target.value === RU.language) setLang(RU);
    else setLang(EN);
  }

  return (
    <select 
    className={`nav__select nav__select_${loggedIn ? 'inside' : ''} 
      nav__select_type_${!loggedIn && pathname === '/' 
      ? 'color' : menuIsOpen || pathname !== '/' 
      ? 'grey' : 'color'}`} 
    name='lang' 
    autoComplete='true' 
    onChange={selectLang}>
      <option className='nav__option' value='en'>EN</option>
      <option className='nav__option' value='de'>DE</option>
      <option className='nav__option' value='ru'>RU</option>
    </select>
  )
}

export default LangSelect;