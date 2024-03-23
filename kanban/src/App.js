import './App.css';
import { ColumList } from './ColumnList';
import { Header } from './Header';
import { Title } from "./Title"

import {useState} from 'react'

import { Project } from './constants/project';

function App() {

  const [project, setProject] = useState(new Project("My project"));
  // const project = new Project("My project");

  function changeProjectTitle(newTitle){
    project.title = newTitle;
    setProject(project);
  }


  return (
    <div className="container">
        
        <Header>
          <Title  className = "header-title" onRename={changeProjectTitle}>
            {project.title}
          </Title>
        </Header>
        
        <ColumList project = {project}/>
    </div>
  );
}

export default App;
