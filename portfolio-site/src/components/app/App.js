import logo from './logo.svg';
import './App.css';
import Overview from '../../components/overview/overview'
import ProjectCard from '../../components/projectCard/projectCard'
import Title from '../../components/title/title';
import PhysicsPlayground from '../../components/physicsPlayground/physicsPlayground';
import LanguageBar from '../../components/languageBar/languageBar'
import MotionDiv from '../../components/motionDiv/motionDiv';
import IconSolarSystem from '../../components/projectCard/iconSolarSystem';
import InfoBlock from '../infoBlock/infoBlock';

function App() {
  return (
    <div className="App">
      {/* <PhysicsPlayground/> */}

    
      <Title/>
        <div className="App-contents">
        {/* <Overview/> */}
        <InfoBlock/>
        <ProjectCard/>
        </div>
    </div>
  );
}

export default App;
