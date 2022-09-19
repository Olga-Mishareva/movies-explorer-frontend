import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './AboutProject.css';

function AboutProject({ projectRef }) {
  const [ lang ] = useContext(LanguageContext);

  return (
    <section className="project" ref={projectRef}>
        <h2 className="section-heading">{lang.aboutProject}</h2>
        <div className="project__description">
          <div className="project__about">
            <h3 className="project__title">{lang.stepsHeading}</h3>
            <p className="project__text">{lang.stepsText}</p>
          </div>
          <div className="project__about">
            <h3 className="project__title">{lang.timeHeading}</h3>
            <p className="project__text">{lang.timeText}</p>
          </div>
        </div>
        <div className="project__duration">
          <div className="project__stage project__stage_type_short">
            <p className="project__time project__time_type_short">{lang.backendTime}</p>
            <p className="project__topic">Back-end</p>
          </div>
          <div className="project__stage project__stage_type_long">
            <p className="project__time project__time_type_long">{lang.frontendTime}</p>
            <p className="project__topic">Front-end</p>
          </div>
        </div>
    </section>
  );
}

export default AboutProject;