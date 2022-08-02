import './Footer.css';

function Footer() {
  return (
    <footer className="footer"> 
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container"> 
        <p className='footer__copyright'>&copy;2022</p>
        <nav>
          <ul className='footer__links page__list'>
            <li><a className='footer__link' href='https://practicum.yandex.ru/' rel="noreferrer" target="_blank">Яндекс.Практикум</a></li>
            <li><a className='footer__link' href='https://github.com/Olga-Mishareva' rel="noreferrer" target="_blank">GitHub</a></li>
            <li><a className='footer__link' href='https://www.facebook.com/olja.mishareva' rel="noreferrer" target="_blank">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;