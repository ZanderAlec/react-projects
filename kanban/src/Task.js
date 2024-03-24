import { useEffect, useState } from "react"
import check_icon from "./assets/check-icon.webp"
import edit_icon from "./assets/edit-icon.png"
import delete_icon from "./assets/delete-icon.png"

import { NewTask } from "./NewTask"


export const Task = ({ task, onDelete, onEdit }) => {
    const [toggle, setToggle] = useState(false);
    const [deadlineMsg, setDeadlineMsg] = useState("");

    const [deadDay, deadMonth, deadYear, deadHour, deadMinute] = [task.deadline.getDate(), task.deadline.getMonth(), task.deadline.getFullYear(), task.deadline.getHours(), task.deadline.getMinutes()];

    function handleComplete() {
        const newStatus = !task.completed;
        onEdit({ ...task, completed: newStatus })
    }

    function editTask(editedTask) {
        onEdit(editedTask);
    }

    useEffect(() => {
        const date = new Date();
        const [day, month, year, hours, minutes] = [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        const joinDate = (day + month + year + hours + minutes);
        const joinDeadDate = (deadDay + deadMonth + deadYear + deadHour + deadMinute)

        if (joinDate > joinDeadDate)
            setDeadlineMsg("Expired");

        else if (joinDeadDate === joinDate + 1)
            setDeadlineMsg("Tomorrow");

        else if (joinDate === joinDeadDate)
            setDeadlineMsg("Today");

        else
            setDeadlineMsg("");

    }, [deadlineMsg, task.deadline]);



    return <div className="card card-box">
        <div className="card-title">

            <div className={`tag icon-box tag--${task.priority}`}>
                {task.priority}
            </div>

            <div class="card-title--icons">
                <button onClick={() => setToggle(true)} className="bttm"><img className="icon" src={edit_icon} alt="edit" /></button>
                <button onClick = {() => onDelete()} className="bttm"><img className="icon" src={delete_icon} alt="delete" /></button>
            </div>

        </div>

        <h2> {task.title} </h2>

        {toggle && <NewTask onClose={() => setToggle(false)} createTask={editTask} task={task} />}


        <div className="card-title">

            <p>
                {deadlineMsg ? deadlineMsg : `${deadYear}-${deadMonth}-${deadDay}`}
                {` ${deadHour}:${deadMinute}`}
            </p>

            <button className={` icon-box--rounded  ${task.completed && "icon--confirm"}`}
                onClick={() => handleComplete()}>
                <img className="icon " src={check_icon} alt="v" />
            </button>
        </div>

    </div>
}