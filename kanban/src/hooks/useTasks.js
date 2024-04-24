import { useMemo, useState } from "react";

function generateId() {
    return Math.floor(Math.random() * 10001)
}

//Create and manipulate tasksList
export const useTasks = () => {
    const [tasks, setTasks] = useState([]);


    const handleTask  = useMemo(() => ({
        
        createTask: (columnId, title, priority, deadline, completed) => {
            const newTask = {
                id: generateId(),
                title,
                priority,
                deadline,
                completed,
                columnId
            }
    
            setTasks([...tasks, newTask]);
        },
    
        deleteTask: (id) => {
            setTasks(
                tasks.filter(task => task.id !== id)
            );
        },
    
        editTask: (taskId, columnId, title, priority, deadline, completed) => {
    
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


        })
    ,[tasks])


    return [tasks, setTasks, handleTask]
}