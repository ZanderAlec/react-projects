import { useMemo, useState } from "react";
import { Column } from "./Column"
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { ColumnOverlay } from "./ColumnOverlay";
import { createPortal } from 'react-dom'
import { Task } from "./Task"



export const KanbanBoard = () => {

    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState([]);

    const columnsId = useMemo(() => columns.map(col => col.id), [columns])

    const [activeColumn, setActiveColumn] = useState(null);
    const [activeTask, setActiveTask] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                //Distancia em pixels que deverá ser percorrida p/ o evento de drag acontecer.
                distance: 3
            }
        })
    );


    function generateId() {
        return Math.floor(Math.random() * 10001)
    }

    function changeColName(id, title) {
        setColumns(
            columns.map(col => (
                col.id === id ? { ...col, title } : col
            ))
        )
    }

    function createColumn() {
        const newCol = {
            id: generateId(),
            title: `New col ${columns.length + 1}`,
            color: columns.length % 2 === 0 ? "bkg-green" : "bkg-blue"
        }

        setColumns([...columns, newCol]);
    }

    function deleteColumn(id) {
        setColumns(
            columns.filter(col => col.id !== id)
        )
    }

    function createTask(columnId, title, priority, deadline, completed) {
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

    function deleteTask(id) {
        setTasks(
            tasks.filter(task => task.id !== id)
        );
    }

    function editTask(taskId, columnId, title, priority, deadline, completed) {

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

    /*Drag and drop----------------- */


    /*Apply drag effect */
    function onDragStart(event) {
        if (event.active.data.current.type === "Column") {
            setActiveColumn(event.active.data.current.column);
            return
        }

        if (event.active.data.current.type === "Task")
            setActiveTask(event.active.data.current.task);
    }

    /*Change the columns position*/
    function onDragEnd(event) {
        setActiveColumn(null);
        setActiveTask(null);

        const { active, over } = event;

        //Se o over não existir, é pq n estamos "dragging" sobre um elemento válido.
        if (!over) return;

        const activeColumn = active.id;
        const overColumn = over.id;

        //Se eu estou soltando na mesma posição não faz nada.
        if (activeColumn === overColumn) return;

        setColumns(columns => {
            const activeColumnIndex = columns.findIndex(
                col => col.id === activeColumn
            );

            const overColumnIndex = columns.findIndex(
                col => col.id === overColumn
            );

            /*arrayMove é uma função auxiliar que troca dois elementos de posição no array.
              Parâmetros:
                1- Array que será manipulado.
                2- index 1
                2- index 2
            */
            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        })
    }

    /*MultiColumn task */
    function onDragOver(event) {

        const { active, over } = event;

        //Se o over não existir, é pq n estamos "dragging" sobre um elemento válido.
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        //Se eu estou soltando na mesma posição não faz nada.
        if (activeId === overId) return;

        //EXISTEM DOIS CENÁRIOS POSSÍVEIS:
        //1 - Task esta sendo solta sobre uma outra task

        const isActiveATask = active.data.current?.type === "Task";
        const isOverATask = over.data.current?.type === "Task";

        if (!isActiveATask) return;

        if (isActiveATask && isOverATask) {
            //O evento só poderá ser chamado quando tasks estiverem sendo dragged
            setTasks((task) => {

                const activeIndex = task.findIndex((t) => t.id === activeId);

                const overIndex = task.findIndex((t) => t.id === overId);

                tasks[activeIndex].columnId = tasks[overIndex].columnId;

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverAColumn = over.data.current?.type === "Column";

        if(isActiveATask && isOverAColumn){
          setTasks((tasks) => {
            const activeIndex = tasks.findIndex((t) => t.id === activeId);
    
            //Caso as tasks estejam em colunas diferentes.
            tasks[activeIndex].columnId = overId;
    
            //A mudança pro mesmo index é pra ativar um reender no component.
            return arrayMove(tasks, activeIndex, activeIndex);
          })
        }
    }


        return <div className="container columList flex">
            <DndContext
                sensors={sensors}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragOver={onDragOver}
            >

                <SortableContext items={columnsId}>
                    {columns.map((column) => {
                        return <Column
                            key={column.id}
                            column={column}
                            rename={changeColName}
                            onDelete={deleteColumn}
                            createTask={createTask}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            tasks={tasks.filter(task => task.columnId === column.id)}
                            />
                    })}
                </SortableContext>

                <div onClick={() => createColumn()} className=" dashed-box column column--new pointer bkg-white">
                    <p>+ New Col</p>
                </div>

                {createPortal(
                    <DragOverlay>
                        {activeColumn &&
                            <ColumnOverlay
                                key={activeColumn.id}
                                column={activeColumn}
                                rename={changeColName}
                                createTask={createTask}
                                deleteTask={deleteTask}
                                editTask={editTask}
                                tasks={tasks.filter(task => task.columnId === activeColumn.id)}
                            />
                        }

                        {activeTask &&
                            <Task
                                key={activeTask.id}
                                task={activeTask}
                                onDelete={deleteTask}
                                onEdit={editTask}                            />
                        }
                    </DragOverlay>,
                    document.body
                )}
            </DndContext>
        </div>
    }