import { useMemo, useState } from "react";


function generateId() {
    return Math.floor(Math.random() * 10001)
}

//create and manipulate the columnList
export const useColumns = () => {
    const [columns, setColumns] = useState([]);
    const columnsId = useMemo(() => columns.map(col => col.id), [columns]);


    const colsConfig = useMemo( () => ({
        
        createCol: () => {
            const newCol = {
                id: generateId(),
                title: `New col ${columns.length + 1}`,
                color: columns.length % 2 === 0 ? "bkg-green" : "bkg-blue"
            }
    
            setColumns([...columns, newCol]);
        }, 

        changeNameCol: (id, title) => {
            setColumns(
                columns.map(col => (
                    col.id === id ? { ...col, title } : col
                ))
            )
        },
        
        deleteCol: (id) =>  {
            setColumns(
                 columns.filter(col => col.id !== id)
            )
        }

    }), [columns])    


    return [columns, setColumns, columnsId, colsConfig]
}

