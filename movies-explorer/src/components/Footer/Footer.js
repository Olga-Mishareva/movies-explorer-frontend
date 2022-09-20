import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Footer.css';

function Footer() {
  const [ lang ] = useContext(LanguageContext); 

  return (
    <footer className="footer"> 
      <p className='footer__text'>{lang.credentials}</p>
      <div className="footer__container"> 
        <p className='footer__copyright'>&copy;2022</p>
        <nav>
          <ul className='footer__links page__list'>
            {/* <li><a className='footer__link' href='https://practicum.yandex.ru/' rel="noreferrer" target="_blank">Y.Praktikum</a></li> */}
            <li><a className='footer__link' href='https://github.com/Olga-Mishareva' rel="noreferrer" target="_blank">GitHub</a></li>
            <li><a className='footer__link' href='https://www.facebook.com/olja.mishareva' rel="noreferrer" target="_blank">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;