import './App.css';
import { ColumList } from './ColumnList';
import { Header } from './Header';
import { Title } from "./Title"
import {useState} from 'react'

function App() {

  const [project, setProject] = useState({
    title: "My project",
    columns: [],
  });

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
        
        <ColumList project = {project} setProject={setProject} />
    </div>
  );
}

export default App;
