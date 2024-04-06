import { NewTask } from "./NewTask";
import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "../assets/dots-icon.png"
import delete_icon from "../assets/delete-icon.png"

import { UseToggle } from "../hooks/useToggle";


export const Column = ({ column, rename, onDelete, tasks, createTask, deleteTask, editTask, className }) => {

    const [toggle, setToggle] = UseToggle()
    const [dropdown, setDropdown] = UseToggle();

    function editColName(name) {
        rename(column.id, name)
    }

    return <div className={`column card-box flex-col ${className}`}>
        <div className="flex-btwn-center">
            <div className="flex-btwn-center">
                <div className="task-num icon-box icon-box--rounded">
                    {tasks.length}
                </div>

                <Title className={"title-mid"} onRename={editColName} title={column.title} />
            </div>

            <div class="col-head-bttms">
                <button className="bttm pointer" onClick={() => setDropdown()} >
                    <img className="icon " src={dots_icon} alt="..." />
                </button>

                {dropdown &&
                    <div className="dropdown card-box">
                        <ul className="dropdown-list">
                            <li className="pointer" onClick={() => onDelete(column.id)}><img className="icon" src={delete_icon} alt="" /> Delete</li>
                        </ul>

                        <div className="drop-arrow"></div>
                    </div>
                }

            </div>

        </div>

        <div className="column-body flex-col">
            {
                tasks.map((task) => {
                    return <Task
                        key={task.id}
                        task={task}
                        onDelete = {deleteTask} 
                        onEdit = {editTask}
                    />
                })
            }


            <button onClick={() => setToggle(true)} className="bkg-white dashed-box pointer addTask-bttm ">+ Add new task</button>
        </div>

        
        {toggle && <NewTask onClose={setToggle} createTask={createTask} columnId={column.id} />}

    </div>
}