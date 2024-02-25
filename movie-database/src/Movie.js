export const Movie = () => {
    return (
    <div className="bg-sky-700 w-full md:w-40	mb-4 rounded-md flex md:flex-col  ">
             <div className = "w-20	 md:w-full ">
               <img className="w-full block " src="https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg" alt="Poster"/>
            </div>

            <div className="p-4 w-full">
                <h2 className=" text-white text-2xl pb-2">Titulo</h2>
                <div className="flex justify-between">
                    <h3>Autor tal</h3>
                    <p className="text-neutral-400">1994</p>
                </div>
            </div>
        </div>
    );
}