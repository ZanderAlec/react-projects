import { useState } from "react";
import { Column } from "./Column"

export const ColumList = ({project}) => {

    const [count, setCount] = useState(1);

    function changeColName(id, newTitle){
        project.columns[id].title = newTitle;
    }

    function handleNewCol(){
        project.addColumn(`New Col ${count}`);
        setCount(count + 1)
    }

    return <div className="columList">
        {project.columns && project.columns.map((column, id) => {
            return <Column column = {column} rename={(newTitle) => changeColName(id, newTitle) } />
        })}

        <div onClick = {() => handleNewCol()} className=" card-box column column--new">
            <p>+ New Col</p>
        </div>
    </div>
}