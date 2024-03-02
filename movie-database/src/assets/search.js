
export const Search = ({query, setQuery}) => {
    
    return  <div className="flex w-3/4 sm:w-1/4 items-center	">
        <input type="text" placeholder="Entry search here" 
            className="border border-solid border-sky-800 bg-sky-950 pl-4 py-2 rounded-md  sm:w-full"
             value = {query}
            onChange={(event) => {setQuery(event.target.value)}}    
        />
        <button className="text-white text-xl	 pl-2" onClick={() => setQuery("")}>x</button>
    </div>
}