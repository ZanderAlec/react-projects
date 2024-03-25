import { NewTask } from "./NewTask";
import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "./assets/dots-icon.png"
import delete_icon from "./assets/delete-icon.png"


import { useCallback, useState } from "react";
import { UseToggle } from "./hooks/useToggle";


export const Column = ({ column, rename, onDelete, className }) => {

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [toggle, setToggle] = UseToggle()
    const [dropdown, setDropdown] = UseToggle();

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


    function handleDelete(){
        setDropdown();
        onDelete();
    }


    return <div className={`column card-box flex-col ${className}`}>
        <div className="flex-btwn-center">
            <div className="flex-btwn-center">
                <div className="task-num icon-box icon-box--rounded">
                    {column.tasks.length}
                </div>

                <Title className={"title-mid"} onRename={rename} title = {column.title}/>
            </div>

            <div class="col-head-bttms">
                <button className="bttm pointer" onClick = {() => setDropdown()} >
                    <img className="icon " src={dots_icon} alt="..." />
                </button>

                {dropdown &&
                    <div  className="dropdown card-box">
                        <ul className="dropdown-list">
                            <li className="pointer" onClick={() => handleDelete()}><img className="icon" src={delete_icon} alt=""/> Delete</li>
                        </ul>

                        <div className="drop-arrow"></div>
                    </div>
                }

            </div>

        </div>

        <div className="column-body flex-col">
            {
                column.tasks.map((task, id) => {
                    return <Task task={task} 
                            onDelete = {() => deleteTask(id)} 
                            onEdit = {(editedTask) => editTask(id, editedTask)}
                            />
                })
            }


            <button onClick={() => setToggle(true)} className="bkg-white dashed-box pointer addTask-bttm ">+ Add new task</button>
        </div>
        {toggle && <NewTask onClose={setToggle} createTask={createTask} />}

    </div>
}