import logo from './logo.svg';
import './App.css';
import Overview from '../../components/overview/overview'
import ProjectCard from '../../components/projectCard/projectCard'
import Title from '../../components/title/title';
import PhysicsPlayground from '../../components/physicsPlayground/physicsPlayground';

function App() {
  return (
    <div className="App">
      {/* <PhysicsPlayground/> */}
     <Overview/>
     <Title/>
     <ProjectCard/>
    </div>
  );
}

export default App;
