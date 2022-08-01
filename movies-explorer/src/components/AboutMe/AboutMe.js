import './AboutMe.css';
import foto from '../../images/student_foto.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className='section-heading'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__description'>
          <h3 className='about-me__title'>Ольга</h3>
          <p className='about-me__subtitle'>Веб-разработчик, 38 лет</p>
          <p className='about-me__text'>Я сейчас живу в Берлине. Много лет работала с клиентами, а также организовала более 40 мероприятий до 100 участников. Увлекаюсь фотографией и люблю путешествовать. После прохождения курса, нашла хорошо оплачиваемую работу в веб-разработке.</p>
          <ul className='about-me__links page__list'>
            <li className='about-me__link'>Facebook</li>
            <li className='about-me__link'>GitHub</li>
          </ul>
        </div>
        <img className='about-me__foto' src={foto} alt='Фотография студента'></img>
      </div>
    </section>
  );
}

export default AboutMe;