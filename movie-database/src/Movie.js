export const Movie = ({setSelectedMovieId, movie, clicked}) => {
    return (
    <div className={` w-full md:w-40 mb-4 flex sm:flex-col pb-2 brightness-75 hover:cursor-pointer	hover:brightness-100 ${clicked && "brightness-100 "}`}
        onClick={() => setSelectedMovieId(movie.imdbID)}
    >
            <div className = "w-20	 md:w-full ">
               <img className={`w-full block rounded-md	`} src={movie.Poster} alt="Poster"/>
            </div>

            <div className="pt-1 w-full pl-4 sm:pl-0	" >
                <h2 className=" text-white text-1xl pb-1">{movie.Title}</h2>
                <p className=" text-white">{movie.Year}</p>
            </div>
        </div>
    );
}