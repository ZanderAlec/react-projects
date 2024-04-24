import { useEffect, useState } from "react";
import { UseFormatDate } from "../hooks/useFormatDate";

export const NewTask = ({
    onClose,
    createTask,
    task,
    columnId
}) => {


    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState("");

    const [formateDate, formateTime] = UseFormatDate(task?.deadline);


    useEffect(() => {


        if (!task)
            return

        setTitle(task.title);
        setPriority(task.priority);

        const fDate = formateDate();
        const fTime = formateTime();

        console.log(fDate, fTime);

        const formatedDate = `${fDate}T${fTime}`

        setDeadline(formatedDate);
    }, []);


    function handleSubmit() {
        const [date, time] = deadline.split("T");
        const [year, month, day] = date.split("-");
        const [hour, minutes] = time.split(":");
        const dateFormat = new Date(year, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minutes));

        createTask(columnId, title, priority, dateFormat, false);
        onClose();
    }

    return <div className="fosco-bkg">
        <div className="newTask-window bkg-white">
            <div className="flex newTask-header">
                <h2 className="newTask-title">New Task</h2>
                <button onClick={() => onClose()} className="newTask-close pointer" type="">x</button>
            </div>

            <form className="newTask-form" >
                <div className="newTask-input">
                    <label for="">Title</label>
                    <input className="icon-box" type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                <div className="newTask-input">
                    <label for="">Priority</label>
                    <select className=" icon-box "
                        onChange={(event) => setPriority(event.target.value)}>
                        <option ></option>
                        <option defaultValue={task?.priority === "low"} value="low">low</option>
                        <option defaultValue={task?.priority === "medium"} value="medium">medium</option>
                        <option defaultValue={task?.priority === "high"} value="high">high</option>
                    </select>
                </div>

                <div className="newTask-input">
                    <label for="">Deadline</label>
                    <input className="icon-box" type="datetime-local"
                        onChange={(event) => setDeadline(event.target.value)}
                        value={deadline}
                    ></input>
                </div>

            </form>



            <button
                disabled = { !(title && priority && deadline)}
                onClick={() => handleSubmit()}
                className="newtask-bttm  icon-box pointer"
            >
                {!task ? "Create" : "Confirm"}
            </button>

        </div>
    </div>
}