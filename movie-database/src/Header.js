export const Header = () => {
    return <div className = "  bg-sky-900  flex justify-between  py-4 px-2 md:px-8 drop-shadow		">
        <h1 className="text-2xl	font-semibold	text-white	">Logo</h1>
        <div className="flex w-3/4 sm:w-1/4 items-center	">
            <input type="text" placeholder="Entry search here" className="border border-solid border-sky-800 bg-sky-950 pl-4 py-2 rounded-md  sm:w-full	    	"/>
            <button className="text-white text-xl	 pl-2">x</button>
        </div>
    </div>
}