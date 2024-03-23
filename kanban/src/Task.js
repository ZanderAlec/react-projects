import { useEffect, useState } from "react"
import check_icon from "./assets/check-icon.webp"

export const Task = ({task}) => {
    const [complete, setComplete] = useState(task.completed);
    const [deadlineMsg, setDeadlineMsg] = useState("");

    const [deadDay, deadMonth, deadYear, deadHour, deadMinute] = [  task.deadline.getDate(),  task.deadline.getMonth(),   task.deadline.getFullYear(),   task.deadline.getHours(),   task.deadline.getMinutes()];

    function handleComplete(){
        task.completed = !task.completed;
        setComplete(task.completed);
    }

    useEffect(() => {
        const date = new Date();
        const [day, month, year, hours, minutes] = [date.getDate(),date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
       
        const joinDate = (day+month+year+hours+minutes);
        console.log(joinDate);

        const joinDeadDate = (deadDay+deadMonth+deadYear+deadHour+deadMinute)
        console.log(joinDeadDate);

        if(joinDate > joinDeadDate)
            setDeadlineMsg("Expired");

        else if(joinDeadDate === joinDate+1)
            setDeadlineMsg("Tomorrow");
        
        else if(joinDate === joinDeadDate)
            setDeadlineMsg("Today");
        
            
    },[deadlineMsg, task.deadline]);



    return <div className = "card card-box">
        <h2 className="card-title">
            {task.title}
        </h2>   

        <div className={`tag icon-box tag--${task.priority}`}>{task.priority}</div>

        <div className="time-done">

            <p className="card-time " >
                {deadlineMsg ? deadlineMsg : `${deadYear}-${deadMonth}-${deadDay}`} 
                {` ${deadHour}:${deadMinute}`}
            </p>

            <button  className={`icon-box--rounded ${complete && "icon--confirm"}`}
                    onClick={() => handleComplete()}>
                <img className="icon " src={check_icon} alt="v"/>
            </button>
        </div>
       
    </div>
}