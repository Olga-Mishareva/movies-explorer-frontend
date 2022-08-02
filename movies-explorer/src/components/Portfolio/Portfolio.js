import { Link } from "react-router-dom";
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links page__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://olga-mishareva.github.io/how-to-learn" rel="noreferrer" target="_blank">
              <p className="portfolio__link-title">Статичный сайт</p>
              <img className="portfolio__link-img" src={arrow} alt="Стрелка"></img>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://olga-mishareva.github.io/russian-travel/" rel="noreferrer" target="_blank">
              <p className="portfolio__link-title">Адаптивный сайт</p>
              <img className="portfolio__link-img" src={arrow} alt="Стрелка"></img>            
            </a>          
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://mesto.om.nomoredomains.xyz/" rel="noreferrer" target="_blank">
              <p className="portfolio__link-title">Одностраничное приложение</p>
              <img className="portfolio__link-img" src={arrow} alt="Стрелка"></img>            
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;