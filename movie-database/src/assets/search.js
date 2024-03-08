
export const Search = ({query, setQuery}) => {
    
    return  <div className="flex   sm:w-2/4 	">
        <input type="text" placeholder="Entry search here" 
            className="border border-solid border-sky-800 bg-sky-950 pl-4 py-2 rounded-md  sm:w-full outline-none text-slate-300"
             value = {query}
            onChange={(event) => {setQuery(event.target.value)}}    
        />
        <button className={`text-white text-xl	pl-2 ${!query && "hidden"}`} onClick={() => setQuery("")}>x</button>
    </div>
}