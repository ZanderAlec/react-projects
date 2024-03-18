import check_icon from "./assets/check-icon.webp"

export const Task = () => {
    return <div className = "card card-box">
        <h2 className="card-title">
            Isso definitivamente é um titulo
            <span className="tag icon-box tag--low">High</span>
        </h2>   

        <div className="time-done">
            <p className="card-time " >Tomorrow 20:20</p>
            <button  className="icon-box--rounded icon--confirm">
                <img className="icon " src={check_icon} alt="v"/>
            </button>
        </div>
       
    </div>
}