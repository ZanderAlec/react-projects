export const Movie = () => {
    return (
        <div className =  "text-center py-2 sm:flex">
            <div className = "w-4/6	sm:w-2/5		 inline-block relative">
                <img src="https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg" alt="Poster" className="w-full"/>
                <div className="bg-emerald-200 rounded-full w-fit p-2 absolute top-2 right-2 font-medium sm:relative sm:rounded-sm sm:p-0 sm:text-sm	">
                    <p >9.4</p>
                </div>
            </div>
            
            <div>
            <h2 className = " text-white text-2xl">Titulo</h2>
            <p className="text-neutral-400">Infos adicionais</p>
            </div>
            
        </div>
    )
}