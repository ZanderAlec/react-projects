import { useState } from "react";
import { Column } from "./Column"

function getColor (){
    const colorList = ["bkg-pink", "bkg-blue", 'bkg-yellow', "bkg-green"]
    let counter = 0;
    
    return function (){
        let color = colorList[counter];
        counter+1 === colorList.length ? counter = 0 : counter++;
        return color;
    }
}

export const ColumList = ({project, setProject}) => {

    const [count, setCount] = useState(1);
    const colorGetter = getColor(); 

    function changeColName(id, newTitle){
        project.columns[id].title = newTitle;
    }

    function handleNewCol(){
        const newCol = {
            title: `New col ${count}`,
            tasks: []
        }

        project.columns.push(newCol);
        setCount(count + 1)
    }

    function handleDelete(id) {
        const newList = [...project.columns]
        newList.splice(id,1);
        setProject({...project, columns:  newList});
    }

    return <div className="columList">
        {project.columns && project.columns.map((column, id) => {
            return <Column column = {column} 
                    rename={(newTitle) => changeColName(id, newTitle) } 
                    onDelete = {() => handleDelete(id)}
                    className={colorGetter()}/>
        })}

        <div onClick = {() => handleNewCol()} className=" card-box column column--new">
            <p>+ New Col</p>
        </div>
    </div>
}