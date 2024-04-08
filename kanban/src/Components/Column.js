import { NewTask } from "./NewTask";
import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "../assets/dots-icon.png"
import delete_icon from "../assets/delete-icon.png"

import { UseToggle } from "../hooks/useToggle";
import { useMemo, useState } from 'react';

import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'


export const Column = ({ column, rename, onDelete, tasks, createTask, deleteTask, editTask }) => {

    const [toggle, setToggle] = UseToggle()
    const [dropdown, setDropdown] = UseToggle();

    const tasksId = useMemo(() => tasks.map(task => task.id), [tasks])

    const [editMode, setEditMode] = useState(false);

    function editColName(name) {
        rename(column.id, name)
    }

    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },

        //Desabilita o drag enquanto estiver no modo de edição.
        disabled: editMode
    });


    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className={` column drag-box bkg-grey flex-col`}>

                <div className="drag-content">
                    <div
                        {...attributes}
                        {...listeners}
                        className="flex-btwn-center col-header grab"
                    >
                        <div className="flex-btwn-center ">
                            <div className="task-num icon-box icon-box--rounded">
                                {tasks.length}
                            </div>

                            <Title
                                className={"title-mid"}
                                onRename={editColName}
                                title={column.title}
                                onEdit={setEditMode}
                            />
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

                    <div className=" column-body flex-col">
                        <SortableContext items={tasksId}>

                            {tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    onDelete={deleteTask}
                                    onEdit={editTask}
                                />
                            ))}

                        </SortableContext>

                        <button onClick={() => setToggle(true)} className="dashed-box pointer addTask-bttm ">+ Add task</button>
                    </div>


                    {toggle && <NewTask onClose={setToggle} createTask={createTask} columnId={column.id} />}

                </div>

            </div>
        )
    }


    return (
        <div>

            <div
                ref={setNodeRef}
                style={style}
                className={` column card-box flex-col ${column.color}`}>

                <div
                    {...attributes}
                    {...listeners}
                    className={`flex-btwn-center col-header  grab`}
                >
                    <div className="flex-btwn-center ">
                        <div className="task-num icon-box icon-box--rounded">
                            {tasks.length}
                        </div>

                        <Title
                            className={"title-mid"}
                            onRename={editColName}
                            title={column.title}
                            onEdit={setEditMode}
                        />
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

                <div className=" column-body flex-col">
                    <SortableContext items={tasksId}>

                        {tasks.map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                                onDelete={deleteTask}
                                onEdit={editTask}
                            />
                        ))}

                    </SortableContext>

                    <button onClick={() => setToggle(true)} className="dashed-box pointer addTask-bttm ">+ Add task</button>
                </div>

            </div>

            {toggle && <NewTask onClose={setToggle} createTask={createTask} columnId={column.id} />}

        </div>)
}