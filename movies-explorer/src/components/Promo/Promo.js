import { Link } from "react-router-dom";
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <div className="promo">
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to="" className='promo__link'>Узнать больше</Link>
      </div>
      <img className='promo__langing-logo' src={landingLogo} alt='Логотип главной страницы'></img>
    </div>
  );
}

export default Promo;