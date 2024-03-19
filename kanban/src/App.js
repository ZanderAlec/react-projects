import './App.css';
import { ColumList } from './ColumnList';
import { Header } from './Header';
import { Title } from "./Title"

import {useState} from 'react'


const initialProject = {
  title: "My project",
  columns : [
    {
      title: "To Do",
      tasks: [] 
    }
  ]
}

function App() {

  const [project, setProject] = useState(initialProject);

  function changeProjectTitle(newTitle){
    const newProj = { ...project, title: newTitle};
    setProject(newProj);
  }

  function changeColumnTitle(id, newTitle){
    const temp = {...project}
    temp.columns[id].title = newTitle;
  }

  return (
    <div className="container">
        
        <Header>
          <Title  className = "header-title" onRename={changeProjectTitle}>
            {project.title}
          </Title>
        </Header>
        <ColumList colList = {project.columns}/>
    </div>
  );
}

export default App;
