import { useEffect, useState } from "react";
import { UseFormatDate } from "./hooks/useFormatDate";

export const NewTask = ({
    onClose,
    createTask, 
    task = {
        title: "",
        priority: "",
        deadline: ""
    }
}) => {


    const [title, setTitle] = useState(task.title);
    const [priority, setPriority] = useState(task.priority);
    const [deadline, setDeadline] = useState("");

    const [formateDate, formateTime] = UseFormatDate();

    useEffect(() => {
        if(!task.deadline)
             return

        const fDate = formateDate(task.deadline);
        const fTime = formateTime(task.deadline);

        const formatedDate = `${fDate}T${fTime}`

        setDeadline(formatedDate);
    },[formateDate, formateTime, task.deadline]);


    function handleSubmit() {
        const [date,time] = deadline.split("T");         
        const [year,month,day] = date.split("-");
        const [hour, minutes] = time.split(":");
        const dateFormat = new Date(year,parseInt(month) - 1,parseInt(day), parseInt(hour), parseInt(minutes)) ;

        const newTask = {
            title,
            priority,
            deadline: dateFormat,
            completed: false
        }

        createTask(newTask);
        onClose();
    }

    return <div className="fosco-bkg">
        <div className="newTask-window card-box">
            <div className="flex-btwn-center newTask-header">
                <h2>new Task</h2>
                <button onClick={() => onClose()} className = "bttm pointer" type="">x</button>
            </div>
      
            <form className="newTask-form" >
                <div className="newTask-input">
                    <label for="">Title</label>
                    <input className="icon-box" type="text" 
                        value = {title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                <div className="newTask-input">
                    <label for="">Priority</label>
                    <select className=" icon-box " 
                        onChange={(event) => setPriority(event.target.value)}>
                            <option ></option>
                            <option defaultValue = {task.priority === "low"} value="low">low</option>
                            <option defaultValue = {task.priority === "medium"} value="medium">medium</option>
                            <option defaultValue = {task.priority === "high"} value="high">high</option>
                    </select>
                </div>

                <div className="newTask-input">
                    <label for="">Deadline</label>
                    <input type="datetime-local"
                        onChange={(event) => setDeadline(event.target.value)}
                        value = {deadline}
                    ></input>
                </div>
            
            </form>

            <button onClick={() => handleSubmit()} className="newtask-bttm  icon-box">Create</button>

        </div>
    </div>
}