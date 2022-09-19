import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Techs.css';

function Techs() {
  const [ lang ] = useContext(LanguageContext);

  return (
    <section className="techs">
      <div className='techs__container'>
        <h2 className='section-heading'>{lang.technologies}</h2>
        <h3 className='techs__title'>{lang.techsHeading}</h3>
        <p className='techs__subtitle'>{lang.techsText}</p>
        <ul className='techs__list page__list'>
          <li className='techs__item'>HTML</li>
          <li className='techs__item'>CSS</li>
          <li className='techs__item'>JS</li>
          <li className='techs__item'>React</li>
          <li className='techs__item'>Git</li>
          <li className='techs__item'>Express.js</li>
          <li className='techs__item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;