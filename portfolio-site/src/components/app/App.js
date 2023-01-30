import logo from './logo.svg';
import './App.css';
import Overview from '../../components/overview/overview'
import ProjectCard from '../../components/projectCard/projectCard'
import Title from '../../components/title/title';

function App() {
  return (
    <div className="App">
     <Overview/>
     <Title/>
     <ProjectCard/>
    </div>
  );
}

export default App;
