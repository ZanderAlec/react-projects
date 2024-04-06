import { useState } from "react";
import { Column } from "./Column"


export const KanbanBoard = () => {

    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState([]);

    function generateId() {
        return Math.floor(Math.random() * 10001)
    }

    const colorGetter = (function () {
        const colorList = ["bkg-pink", "bkg-blue", 'bkg-yellow', "bkg-green"]
        let counter = 0;

        return function () {
            let color = colorList[counter];
            counter + 1 === colorList.length ? counter = 0 : counter++;
            return color;
        }
    })();


    function changeColName(id, title) {
        setColumns(
            columns.map(col => (
                col.id === id ? {...col, title} : col
            ))
        )
    }

function createColumn() {
    const newCol = {
        id: generateId(),
        title: `New col ${columns.length + 1}`,
    }

    setColumns([...columns, newCol]);
}

function deleteColumn(id) {
   setColumns(
        columns.filter(col => col.id !== id)
   )
}

function createTask(columnId, title, priority, deadline, completed){
    const newTask = {
        id: generateId(),
        title,
        priority,
        deadline,
        completed,
        columnId
    }

    setTasks([...tasks, newTask]);
}

function deleteTask(id){
    setTasks(
        tasks.filter(task => task.id !== id)
    );
}

function editTask(taskId, columnId, title, priority, deadline, completed){

    const newTask = {
        id: taskId,
        title,
        priority,
        deadline,
        completed,
        columnId
    }

    const taskIndex = tasks.findIndex(
        task => task.id === taskId
    )

    const newTasks = [...tasks];
    newTasks[taskIndex] = newTask;

    setTasks(newTasks);
}

return <div className="columList flex">
    {columns.map((column) => {
        return <Column
            key={column.id}
            column={column}
            rename={changeColName}
            onDelete = {deleteColumn}
            createTask = {createTask}
            deleteTask = {deleteTask}
            editTask = {editTask}
            tasks={tasks.filter(task => task.columnId === column.id)}
            className={colorGetter()} />
    })}

    <div onClick={() => createColumn()} className=" dashed-box column column--new pointer bkg-grey">
        <p>+ New Col</p>
    </div>
</div>
}