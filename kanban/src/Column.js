import { NewTask } from "./NewTask";
import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "./assets/dots-icon.png"


import { useCallback, useState } from "react";


export const Column = ({ column, rename, onDelete, className }) => {

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    function createTask(newTask) {
        column.tasks.push(newTask);
        forceUpdate();
    }

    function deleteTask(id){
        column.tasks.splice(id,1);
        forceUpdate();
    }
    
    function editTask(id,editedTask){
        column.tasks[id] = editedTask;
        forceUpdate();
    }

    function handleDropdown() {
        setDropdown((prev) => !prev)
    }


    return <div className={`column card-box ${className}`}>
        <div className="column-header">
            <div className="column-header">
                <div className="task-num icon-box--rounded">{column.tasks.length}</div>
                <Title className={"col-title"} onRename={rename}>
                    {column.title}
                </Title>
            </div>

            <div class="col-head-bttms">
                <button className="bttm" onClick = {() => handleDropdown()} >
                    <img className="icon " src={dots_icon} alt="..." />
                </button>

                {dropdown &&
                    <div  className="dropdown card-box">
                        <ul className="dropdown-list">
                            <li onClick={() => onDelete()}>Delete</li>
                        </ul>

                        <div className="drop-arrow"></div>
                    </div>
                }


            </div>

        </div>

        <div className="column-body">
            {
                column.tasks.map((task, id) => {
                    return <Task task={task} 
                            onDelete = {() => deleteTask(id)} 
                            onEdit = {(editedTask) => editTask(id, editedTask)}
                            />
                })
            }


            <button onClick={() => setToggle(true)} className="addTask-bttm ">+ Add new task</button>
        </div>
        {toggle && <NewTask onClose={() => setToggle(false)} createTask={createTask} />}

    </div>
}