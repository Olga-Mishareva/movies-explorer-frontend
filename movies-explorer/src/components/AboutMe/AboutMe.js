import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './AboutMe.css';
import foto from '../../images/student_foto.jpg';

function AboutMe() {
  const [ lang ] = useContext(LanguageContext);

  return (
    <section className="about-me">
      <h2 className='section-heading'>{lang.student}</h2>
      <div className='about-me__container'>
        <article className='about-me__description'>
          <h3 className='about-me__title'>{lang.studentName}</h3>
          <p className='about-me__subtitle'>{lang.studentAbout}</p>
          <p className='about-me__text'>{lang.studentText}</p>
          <ul className='about-me__links'>
            <li><a className='about-me__link' href='https://www.facebook.com/olja.mishareva' rel="noreferrer" target="_blank">Facebook</a></li>
            <li><a className='about-me__link' href='https://github.com/Olga-Mishareva' rel="noreferrer" target="_blank">GitHub</a></li>
          </ul>
        </article>
        <img className='about-me__foto' src={foto} alt={lang.studentFoto}></img>
      </div>
    </section>
  );
}

export default AboutMe;