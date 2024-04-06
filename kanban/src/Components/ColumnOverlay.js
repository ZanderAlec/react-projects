import { NewTask } from "./NewTask";
import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "../assets/dots-icon.png"
import delete_icon from "../assets/delete-icon.png"

import { UseToggle } from "../hooks/useToggle";

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'


export const ColumnOverlay = ({ column, rename, onDelete, tasks, createTask, deleteTask, editTask, className }) => {

    const [toggle, setToggle] = UseToggle()
    const [dropdown, setDropdown] = UseToggle();



    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },

        //Desabilita o drag enquanto estiver no modo de edição.
        // disabled: editMode
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return <div
        ref={setNodeRef}
        style={style}
        className={` column card-box flex-col ${column.color}`}>

        <div
            {...attributes}
            {...listeners}
            className="flex-btwn-center col-header"
        >
            <div className="flex-btwn-center ">
                <div className="task-num icon-box icon-box--rounded">
                    {tasks.length}
                </div>

                <Title className={"title-mid"} onRename={rename} title={column.title} />
            </div>

            <div class="col-head-bttms">
                <button className="bttm pointer">
                    <img className="icon " src={dots_icon} alt="..." />
                </button>

                {dropdown &&
                    <div className="dropdown card-box">
                        <ul className="dropdown-list">
                            <li className="pointer"><img className="icon" src={delete_icon} alt="" /> Delete</li>
                        </ul>

                        <div className="drop-arrow"></div>
                    </div>
                }

            </div>
        </div>

        <div className=" column-body flex-col">
            {
                tasks.map((task) => {
                    return <Task
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onEdit={editTask}
                    />
                })
            }


            <button className="bkg-white dashed-box pointer addTask-bttm ">+ Add new task</button>
        </div>

    </div>
}