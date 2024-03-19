import { Task } from "./Task"
import { Title } from "./Title"
import dots_icon from "./assets/dots-icon.png"

export const Column = ({column}) => {
    {console.log(column)}



    return <div className = "column card-box">
        <div className = "column-header">
            <div className="column-header">
                <div className="task-num icon-box--rounded">1</div>
                <Title className={"col-title"}>
                    {column.title}
                </Title>
            </div>
           
           <div class="col-head-bttms">
            <button className="icon-box--rounded">+</button>
            <button className="icon-box">
                <img className = "icon " src={dots_icon} alt="..." />
            </button>
           </div>
          
        </div>

        <>
        {
            column.tasks.map((task) => {
                return <Task/>
            })
        }
        </>

        <button className="addTask-bttm ">+ Add new task</button>
    </div>
}