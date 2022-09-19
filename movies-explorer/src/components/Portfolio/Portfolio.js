import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  const [ lang ] = useContext(LanguageContext);

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>{lang.portfolio}</h2>
      <nav className='portfolio__navigation'>
        <ul className='portfolio__links page__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://olga-mishareva.github.io/how-to-learn' rel='noreferrer' target='_blank'>
              <p className='portfolio__link-title'>{lang.staticWebsite}</p>
              <img className='portfolio__link-img' src={arrow} alt={lang.arrow}></img>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://olga-mishareva.github.io/russian-travel/' rel='noreferrer' target='_blank'>
              <p className='portfolio__link-title'>{lang.responsiveWebsite}</p>
              <img className='portfolio__link-img' src={arrow} alt={lang.arrow}></img>            
            </a>          
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://mesto.om.nomoredomains.xyz/' rel='noreferrer' target='_blank'>
              <p className='portfolio__link-title'>{lang.singlePageApp}</p>
              <img className='portfolio__link-img' src={arrow} alt={lang.arrow}></img>            
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;