import { useEffect, useState } from "react"
import check_icon from "./assets/check-icon.webp"
import edit_icon from "./assets/edit-icon.png"
import delete_icon from "./assets/delete-icon.png"

import { NewTask } from "./NewTask"


export const Task = ({ task, onDelete, onEdit }) => {
    const [toggle, setToggle] = useState(false);
    const [deadlineMsg, setDeadlineMsg] = useState("");

    function handleComplete() {
        const newStatus = !task.completed;
        onEdit({ ...task, completed: newStatus })
    }

    function editTask(editedTask) {
        onEdit(editedTask);
    }

    function formateDateTime(day,month,year,hours,minutes){
       
        const d = day > 10 ? day : "0"+day;
        const m = month > 10 ? month+1 : "0"+(month+1);
        const h = hours > 10 ? hours : "0"+hours;
        const min = minutes > 10 ? minutes : "0"+minutes;
        
        const formDate = `${year}-${m}-${d}`
        const formTime = `${h}:${min}`

        return [formDate, formTime];
    }

    useEffect(() => {
        const date = new Date();
        const [day, month, year, hours, minutes] = [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        const [deadDay, deadMonth, deadYear, deadHour, deadMinute] = [task.deadline.getDate(), task.deadline.getMonth(), task.deadline.getFullYear(), task.deadline.getHours(), task.deadline.getMinutes()];
        const [formatedDate, formatedTime] = formateDateTime(deadDay, deadMonth, deadYear, deadHour, deadMinute);

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

            <p> { deadlineMsg } </p>

            <button className={` icon-box--rounded  ${task.completed && "icon--confirm"}`}
                onClick={() => handleComplete()}>
                <img className="icon " src={check_icon} alt="v" />
            </button>
        </div>

    </div>
}