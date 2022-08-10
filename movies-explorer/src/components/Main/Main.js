import { useRef } from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';


function Main() {
  const projectRef = useRef();

  return (
    <main className="main">
      <Promo projectRef={projectRef}/>
      <AboutProject projectRef={projectRef}/>
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;