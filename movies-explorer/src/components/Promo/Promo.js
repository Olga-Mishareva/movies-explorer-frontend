import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  const [ lang ] = useContext(LanguageContext);
  const navigate = useNavigate();

  function viewProject() {
    navigate('/signup');
  }

  return (
    <section className="promo">
      <div className='promo__container'>
        <h1 className='promo__title'>{lang.heading}</h1>
        <p className='promo__subtitle'>{lang.knowMore}</p>
        <button className='promo__button' type='button' onMouseDown={viewProject}>{lang.viewProject}</button>
      </div>
      <img className='promo__langing-logo' src={landingLogo} alt='Logo'></img>
    </section>
  );
}

export default Promo;