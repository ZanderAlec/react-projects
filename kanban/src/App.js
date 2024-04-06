import './App.css';
import { KanbanBoard } from './Components/KanbanBoard';
import { Header } from './Components/Header';
import { Title } from "./Components/Title"
import {useState} from 'react'

function App() {

  const [projectTitle, setProjectTitle] = useState("My project");

  const [project, setProject] = useState({
    title: "My project",
    columns: [],
  });



  return (
    <div className="container">
        
        <Header>
          <Title  className = "title-big" onRename={setProjectTitle} title = {projectTitle}/>
        </Header>
        
        <KanbanBoard project = {project} setProject={setProject} />
    </div>
  );
}

export default App;
