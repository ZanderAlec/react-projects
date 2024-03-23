import { useState } from "react";

export const NewTask = ({onClose, createTask}) => {


    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState("")

    function handleSubmit() {
        const [date,time] = deadline.split("T");         
        const [year,month,day] = date.split("-");
        const [hour, minutes] = time.split(":");
        const dateFormat = new Date(year,parseInt(month) - 1,parseInt(day), parseInt(hour), parseInt(minutes)) ;

        createTask(title, priority, dateFormat);
        onClose();
    }

    return <div className="fosco-bkg">
        <div className="newTask-window card-box">
            <div className="newTask-header">
                <h2>new Task</h2>
                <button onClick={() => onClose()} className = "close-bttm" type="">x</button>
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
                            <option selected></option>
                            <option  value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                    </select>
                </div>

                <div className="newTask-input">
                    <label for="">Deadline</label>
                    <input type="datetime-local"
                        onChange={(event) => setDeadline(event.target.value)}
                    ></input>
                </div>
            
            </form>

            <button onClick={() => handleSubmit()} className="newtask-bttm  icon-box">Create</button>

        </div>
    </div>
}