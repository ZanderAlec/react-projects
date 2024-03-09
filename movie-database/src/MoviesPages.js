import { Header } from "./Header"
import { Movie } from "./Movie"
import { Watchlist } from "./Watchlist.js";
import { Search } from "./assets/search.js";
import { MovieInfo } from "./movieInfo.js"
import { useState, useEffect } from "react";

export const MoviesPage = () => {

    const key = "ed7c69f1";

    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [likedMovieList, setLikedMovieList] = useState(["tt0372784", "tt1877830", "tt2975590"]); 
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    function handleLikedMovie(id){
        let temp = [id, ...likedMovieList];
        setLikedMovieList(temp)
    }

    function removeLikedMovie(id){
        setLikedMovieList(likedMovieList.filter((value) => value != id));
    }

    useEffect(function () {

        async function fetchMoviesQuery() {
            try {
                setMovieList([]);
                setIsLoading(true);
                setError("");

                const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${query}`);

                if (!res.ok)
                    throw new Error("Something went wrong!");

                const data = await res.json();

                if (data.Response === "False")
                    throw new Error("Movie not found");

                setMovieList(data.Search);
                console.log(data.Search)

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        async function fetchMoviesLiked(){

            setMovieList([]);
            let tempList = [];

            for(let id of likedMovieList){
                console.log(id)
                const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}`);
           
                const data = await res.json();
                console.log(data);


                tempList.push(data)
            }

            setMovieList(tempList);
            console.log(movieList)
        }


        if(query)
            fetchMoviesQuery();
        else 
            fetchMoviesLiked()
        
    }, [query, likedMovieList]);


    return (
        <div className={` bg-sky-950 `}>
            <div class={` md:px-6 md:pb-9 relative flex flex-col items-stretch	
                ${selectedMovieId  && "sm:w-[51%] lg:w-[67%] "} 
                ${(!query || error) ? "h-screen" : "h-fit"}`}>
                <Header>
                    <Search query={query} setQuery={setQuery} />
                </Header>

                <div className="grow-0  flex flex-col lg:flex-row justify-between items-center	 py-10	">
                    <h2 className="text-white text-2xl	md:text-4xl text-center lg:text-left break-words  px-2 ">
                        {query ? `Results of ${query}` : "My Watchlist"}
                    </h2>
                    <div className="flex justify-between text-1xl md:text-2xl	font-light text-white	">
                        {query ? <h3 >Found {movieList.length} results</h3>
                            : <div className="flex ">
                                <h3 className="pr-2">🎬0</h3>
                                <h3 className="pr-2">⭐0</h3>
                                <h3>⏳0 min</h3>
                            </div>}

                    </div>
                </div>

                <div className="bg-sky-900 py-8  grow pl-2 sm:pl-0">
                    <div className="  mx-auto flex sm:justify-center   gap-2 xl:gap-6  h-full  flex-wrap">
                        
                        {isLoading && "Loading"}

                        {query && error && error}

                        {query && !isLoading && !error && movieList.map((value) => {
                            return <Movie setSelectedMovieId={() => { setSelectedMovieId(value.imdbID); console.log(selectedMovieId) }} title={value.Title} year={value.Year} img={value.Poster} />
                        })}


                        {!query && <Watchlist>
                            {movieList.map((value) => {
                                return <Movie setSelectedMovieId={() => { setSelectedMovieId(value.imdbID); console.log(selectedMovieId) }} title={value.Title} year={value.Year} img={value.Poster} />
                            })}  
                        </Watchlist> }

                    </div>
                </div>

            </div>


            {selectedMovieId && 
                <MovieInfo toggleClick={() => setSelectedMovieId(null)} 
                setLikedMovie = {handleLikedMovie} 
                removeLikedMovie = {removeLikedMovie}
                apikey = {key} 
                selectedId={selectedMovieId}/>
            }
        </div>
    )
}