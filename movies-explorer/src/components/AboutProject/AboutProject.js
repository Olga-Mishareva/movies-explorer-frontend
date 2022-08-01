import './AboutProject.css';

function AboutProject() {
  return (
    <div className="project">
        <h2 className="project__heading">О проекте</h2>
        <div className="project__description">
          <div className="project__about">
            <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="project__about">
            <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="project__duration">
          <div className="project__stage project__stage_type_short">
            <p className="project__time project__time_type_short">1 неделя</p>
            <p className="project__topic">Back-end</p>
          </div>
          <div className="project__stage project__stage_type_long">
            <p className="project__time project__time_type_long">4 недели</p>
            <p className="project__topic">Front-end</p>
          </div>
        </div>
    </div>
  );
}

export default AboutProject;