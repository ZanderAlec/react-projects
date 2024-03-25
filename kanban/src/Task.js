import { useEffect, useState } from "react"
import check_icon from "./assets/check-icon.webp"
import edit_icon from "./assets/edit-icon.png"
import delete_icon from "./assets/delete-icon.png"

import { NewTask } from "./NewTask"
import { UseToggle } from "./hooks/useToggle"
import { UseFormatDate } from "./hooks/useFormatDate"


export const Task = ({ task, onDelete, onEdit }) => {
    const [toggle, setToggle] = UseToggle();
    const [deadlineMsg, setDeadlineMsg] = useState("");
    const [formateDate, formateTime] = UseFormatDate();

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
        const [deadDay, deadMonth, deadYear, deadHour, deadMinute] = [task.deadline.getDate(), task.deadline.getMonth(), task.deadline.getFullYear(), task.deadline.getHours(), task.deadline.getMinutes()];
        
        const formatedDate = formateDate(task.deadline);
        const formatedTime = formateTime(task.deadline);

        //today
        if(day === deadDay && month === deadMonth && year === deadYear){
            //still in time
            if(hours === deadHour && minutes <= deadMinute)
                return setDeadlineMsg(`Today ${ formatedTime }`);

            //missed
            if((hours === deadHour && minutes > deadMinute)
                || (hours > deadHour))
                return setDeadlineMsg(`Expired today ${ formatedTime }`);
        }

        //tomorrow
        else if(day+1 === deadDay && month === deadMonth && year === deadYear){
            setDeadlineMsg(`Tomorrow ${ formatedTime }`);
        }

        //Expired
        else if((year > deadYear) || (year === deadYear && month > deadMonth)
            ||( year === deadYear && month === deadMonth && day > deadDay)){
                setDeadlineMsg(`Expired ${ formatedDate } ${ formatedTime }`);
        }
        
        //in time
        else
            setDeadlineMsg(`${ formatedDate } ${ formatedTime }`);


    }, [task.deadline, formateDate, formateTime]);


    return <div className="card card-box">
        <div className="flex-btwn-center">

            <div className={`tag icon-box tag--${task.priority}`}>
                {task.priority}
            </div>

            <div class="flex">
                <button onClick={() => setToggle(true)} className="bttm pointer"><img className="icon" src={edit_icon} alt="edit" /></button>
                <button onClick = {() => onDelete()} className="bttm pointer"><img className="icon" src={delete_icon} alt="delete" /></button>
            </div>

        </div>

        <h2> {task.title} </h2>

        {toggle && <NewTask onClose={setToggle} createTask={editTask} task={task} />}

        <div className="flex-btwn-center">

            <p> { deadlineMsg } </p>

            <button className={` icon-box icon-box--rounded ${task.completed && "icon--confirm"}`}
                onClick={() => handleComplete()}>
                <img className="icon " src={check_icon} alt="v" />
            </button>
        </div>

    </div>
}