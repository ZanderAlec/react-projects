import { Task } from "./Task"
import dots_icon from "./assets/dots-icon.png"

export const Column = () => {
    return <div className = "column card-box">
        <div className = "column-header">
            <div className="column-header">
                <div className="task-num icon-box--rounded">1</div>
                <h2 >To Do</h2>
            </div>
           
           <div>
            <button className="icon-box--rounded">+</button>
            <button className="icon-box">
                <img className = "icon " src={dots_icon} alt="..." />
            </button>
           </div>
          
        </div>

        <>
            <Task/>
            <Task/>
       
        </>

        <button className="addTask-bttm ">+ Add new task</button>
    </div>
}