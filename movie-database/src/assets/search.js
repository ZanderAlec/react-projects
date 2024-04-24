import { useEffect, useRef } from "react"

export const Search = ({query, setQuery}) => {
    
    const inputEl = useRef(null);

    useEffect(() => {

        function callback(e){       

            if(document.activeElement === inputEl.current)
                return;

            if(e.key === "Enter"){
                inputEl.current.focus();
                inputEl.current.select();
            }
        }

        document.addEventListener("keydown", callback)

        return () => document.removeEventListener("keydown", callback);

    }, [])

    return  <div className="flex   sm:w-2/4 	">
        <input 
            type="text" 
            placeholder="Search here" 
            className="border border-solid border-sky-800 bg-sky-950 pl-4 py-2 rounded-md  sm:w-full outline-none text-slate-300"
             value = {query}
            onChange={(event) => {setQuery(event.target.value)}}    
            ref = {inputEl}
        />
        <button className={`text-white text-xl	pl-2 ${!query && "hidden"}`} onClick={() => setQuery("")}>x</button>
    </div>
}