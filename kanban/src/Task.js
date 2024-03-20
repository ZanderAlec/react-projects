import { Title } from "./Title"
import check_icon from "./assets/check-icon.webp"

export const Task = ({task}) => {
    return <div className = "card card-box">


        <h2 className="card-title">
            {task.title}
        </h2>   

        <div className="tag icon-box tag--low">{task.priority}</div>

        <div className="time-done">
            <p className="card-time " >{task.time}</p>
            <button  className={`icon-box--rounded ${task.completed && "icon--confirm"}`}>
                <img className="icon " src={check_icon} alt="v"/>
            </button>
        </div>
       
    </div>
}