import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo({ projectRef }) {
  const [ lang ] = useContext(LanguageContext);

  function handleScroll() {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="promo">
      <div className='promo__container'>
        <h1 className='promo__title'>{lang.heading}</h1>
        <p className='promo__subtitle'>{lang.knowMore}</p>
        <button className='promo__button' type='button' onMouseDown={handleScroll}>{lang.knowMoreBtn}</button>
      </div>
      <img className='promo__langing-logo' src={landingLogo} alt='Logo'></img>
    </section>
  );
}

export default Promo;