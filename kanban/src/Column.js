import { NewTask } from "./NewTask";
import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "./assets/dots-icon.png"


import {useCallback, useState} from "react";


export const Column = ({column, rename}) => {

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [toggle, setToggle] = useState(false);

    function createTask(title, priority, data, time){
        column.addTask(title, priority, data, time, false);
        forceUpdate();
    }


    return <div className = "column card-box">
        <div className = "column-header">
            <div className="column-header">
                <div className="task-num icon-box--rounded">{column.tasks.length}</div>
                <Title className={"col-title"} onRename={rename}>
                    {column.title}
                </Title>
            </div>
           
           <div class="col-head-bttms">
            <button className="bttm">
                <img className = "icon " src={dots_icon} alt="..." />
            </button>
           </div>
          
        </div>

        <>
        {
            column.tasks.map((task) => {
                return <Task task = {task}/>
            })
        }
        </>

        <button onClick = {() => setToggle(true)} className="addTask-bttm ">+ Add new task</button>

        {toggle && <NewTask  onClose = {() => setToggle(false)} createTask = {createTask}/> }  
    
    </div>
}