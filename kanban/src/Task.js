import { useEffect, useState } from "react"
import check_icon from "./assets/check-icon.webp"
import edit_icon from "./assets/edit-icon.png"
import { NewTask } from "./NewTask"

export const Task = ({task}) => {
    const [toggle, setToggle] = useState(false);
    const [deadlineMsg, setDeadlineMsg] = useState("");
    const [localTask, setLocalTask] = useState(task);

    const [deadDay, deadMonth, deadYear, deadHour, deadMinute] = [  localTask.deadline.getDate(),  localTask.deadline.getMonth(),   task.deadline.getFullYear(),   localTask.deadline.getHours(),   localTask.deadline.getMinutes()];

    function handleComplete(){
        setLocalTask({...localTask, completed: !localTask.completed});
    }

    function editTask(title, priority, deadline){
        const newTask = {title, priority, deadline, completed: false}
        setLocalTask(newTask);
    }

    useEffect(() => {
        const date = new Date();
        const [day, month, year, hours, minutes] = [date.getDate(),date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        const joinDate = (day+month+year+hours+minutes);
        const joinDeadDate = (deadDay+deadMonth+deadYear+deadHour+deadMinute)

        if(joinDate > joinDeadDate)
            setDeadlineMsg("Expired");

        else if(joinDeadDate === joinDate+1)
            setDeadlineMsg("Tomorrow");
        
        else if(joinDate === joinDeadDate)
            setDeadlineMsg("Today");
        
        else
            setDeadlineMsg("");
            
    },[deadlineMsg, localTask.deadline]);



    return <div className = "card card-box">
        <div className="card-title">
           
            <div className={`tag icon-box tag--${localTask.priority}`}>{localTask.priority}</div>
            <button onClick={() => setToggle(true)} className="bttm"><img className="icon" src={edit_icon} alt="edit"/></button>
        </div>   

        <h2>
            {localTask.title}
        </h2>

        {toggle && <NewTask onClose = {() => setToggle(false)}  createTask={editTask} task = {task}/>}


        <div className="card-title">

            <p>
                {deadlineMsg ? deadlineMsg : `${deadYear}-${deadMonth}-${deadDay}`} 
                {` ${deadHour}:${deadMinute}`}
            </p>

            <button  className={` icon-box--rounded  ${localTask.completed && "icon--confirm"}`}
                    onClick={() => handleComplete()}>
                <img className="icon " src={check_icon} alt="v"/>
            </button>
        </div>
       
    </div>
}