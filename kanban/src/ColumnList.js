import { useState } from "react";
import { Column } from "./Column"


export const ColumList = ({project, setProject}) => {
    const [count, setCount] = useState(1);

    const colorGetter = (function (){
        const colorList = ["bkg-pink", "bkg-blue", 'bkg-yellow', "bkg-green"]
        let counter = 0;
        
        return function (){
            let color = colorList[counter];
            counter+1 === colorList.length ? counter = 0 : counter++;
            return color;
        }
    })();

    function changeColName(id, newTitle){
        const editedCol = [...project.columns];
        editedCol[id].title = newTitle;
        setProject({...project, columns: editedCol});
    }

    function handleNewCol(){
        const newCol = {
            title: `New col ${count}`,
            tasks: []
        }

        const newList = [...project.columns];
        newList.push(newCol);
        setCount(count + 1)
        setProject({...project, columns: newList});
    }

    function handleDelete(id) {
        const newList = [...project.columns]
        newList.splice(id,1);
        setProject({...project, columns:  newList});
    }

    return <div className="columList flex">
        {project.columns && project.columns.map((column, id) => {
            return <Column column = {column} 
                    rename={(newTitle) => changeColName(id, newTitle) } 
                    onDelete = {() => handleDelete(id)}
                    className={colorGetter()}/>
        })}

        <div onClick = {() => handleNewCol()} className=" dashed-box column column--new pointer bkg-grey">
            <p>+ New Col</p>
        </div>
    </div>
}