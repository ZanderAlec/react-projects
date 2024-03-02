import { Header } from "./Header"
import { Movie } from "./Movie"
import { Search } from "./assets/search.js";
import { MovieInfo } from "./movieInfo.js"
import { useState, useEffect } from "react";

export const MoviesPage = () => {

    const key = "ed7c69f1";

    const [infosToggle, setInfosToggle] = useState(true);
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {

        async function fetchMovies() {
            try {
                setIsLoading(true);
                setError("");
                const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${query}`);

                if (!res.ok) 
                    throw new Error("Something went wrong!");
                
                const data = await res.json();

                if(data.Response === "False")
                    throw new Error("Movie not found");

                setMovieList(data.Search);
                console.log(data);

            } catch (err) {
                setError(err.message);
            }finally{
                setIsLoading(false);
            }
        }

        fetchMovies();

    }, [query]);


    return (
        <div class=" h-screen	  md:px-6 md:pb-9 bg-sky-950 relative 	">
            <Header>
                <Search query={query} setQuery={setQuery} />
            </Header>

            <div className="pt-8 h-5/6">
                <div className="flex flex-col lg:flex-row justify-between items-center	pb-8	">
                    <h2 className="text-white text-3xl	md:text-5xl text-center lg:text-left break-words pb-2  px-2 ">
                        {query ? `Results of ${query}` : "My Watchlist"}
                    </h2>
                    <div className="flex justify-between text-1xl md:text-2xl	 text-white	">
                        {query ? <h3 >Found 0 results</h3>
                            : <div className="flex ">
                                <h3 className="pr-2">🎬0</h3>
                                <h3 className="pr-2">⭐0</h3>
                                <h3>⏳0 min</h3>
                            </div>}

                    </div>
                </div>

                <div className="bg-sky-900 py-8 w-full min-h-[70%] lg:min-h-[90%]			">
                    <div className="mt-2 px-2 md:px-8 flex justify-center	lg:justify-normal gap-2 sm:gap-6 h-full flex-wrap	">
                        
                        {isLoading && "Loading"}
                        {!isLoading && !error && movieList.map((value) => {
                            return <Movie onInfosToggle={setInfosToggle} title={value.Title} year={value.Year} img={value.Poster} />
                        })}
                        {error && error}
                    </div>
                </div>

            </div>

            {infosToggle && <MovieInfo toggleClick={setInfosToggle} />}

        </div>
    )
}