import { Column } from "./Column"

export const ColumList = ({colList}) => {
    return <div className="columList">
        {colList.map((column) => {
            return <Column column = {column}/>
        })}
    </div>
}