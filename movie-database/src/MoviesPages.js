import { Header } from "./Header"
import { Movie } from "./Movie"
import { Watchlist } from "./Watchlist.js";
import { Search } from "./assets/search.js";
import { MovieInfo } from "./movieInfo.js"
import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch.js";

export const MoviesPage = () => {

    const key = "ed7c69f1";

    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [query, setQuery] = useState("");
    const [likedMovieList, setLikedMovieList] = useState(["tt0372784", "tt1877830", "tt2975590"]); 
    const [watchedTime, setWatchedTime] = useState(0); 
    const [queryList, fetchByQuery, fetchById, error, isLoading] = useFetch();
    const [watchList, setWatchList] = useState([]);

    function handleLikedMovie(id){
        let temp = [id, ...likedMovieList];
        setLikedMovieList(temp)
    }

    function removeLikedMovie(id){
        setLikedMovieList(likedMovieList.filter((value) => value != id));
    }

    function searchWatchList(id){
        const likedMovie =  likedMovieList.filter(value => value == id);
        return likedMovie.length !== 0;
    }

    useEffect(function () {

        async function fetchMoviesQuery() {
            await fetchByQuery(query);
        }

        async function fetchMoviesLiked(){

            let tempList = [];
            let time = 0;

            for(let id of likedMovieList){
                // const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}`);
           
                // const data = await res.json();

                const result = await fetchById(id);
                time += parseInt(result.Runtime.slice(0,3));
                tempList.push(result);
            }

            setWatchList(tempList);
            setWatchedTime(time);
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

                {/*Titulo e infos*/}
                <div className="grow-0  flex flex-col lg:flex-row justify-between items-center	 py-10	">
                    <h2 className="text-white text-2xl	md:text-4xl text-center lg:text-left break-words  px-2 ">
                        {query ? `Results of ${query}` : "My Watchlist"}
                    </h2>

                    <div className="flex justify-between text-1xl md:text-2xl	font-light text-white	">
                        {queryList ? <h3 >Found {queryList.length} results</h3>
                            : <div className="flex ">
                                <h3 className="pr-2">🎬 {watchList.length} </h3>
                                <h3>⏳{watchedTime} min</h3>
                            </div>}

                    </div>
                </div>

                {/*lista de filmes*/}
                <div className="bg-sky-900 py-8  grow pl-2 sm:pl-0">
                    <div className="  mx-auto flex sm:justify-center   gap-2 xl:gap-6  h-full  flex-wrap">
                        
                        {isLoading && "Loading"}

                        {query && error && error}

                        {query && !isLoading && !error && queryList.map((value) => {
                            return <Movie setSelectedMovieId={() => { setSelectedMovieId(value.imdbID); console.log(selectedMovieId) }} title={value.Title} year={value.Year} img={value.Poster} />
                        })}


                        {!query && <Watchlist>
                            {watchList.map((value) => {
                                return <Movie setSelectedMovieId={() => { setSelectedMovieId(value.imdbID); console.log(selectedMovieId) }} title={value.Title} year={value.Year} img={value.Poster} />
                            })}  
                        </Watchlist> }

                    </div>
                </div>

            </div>

            {/*Filme selecionado*/}
            {selectedMovieId && 
                <MovieInfo toggleClick={() => setSelectedMovieId(null)} 
                setLikedMovie = {handleLikedMovie} 
                removeLikedMovie = {removeLikedMovie}
                apikey = {key} 
                selectedId={selectedMovieId}
                isliked = {searchWatchList(selectedMovieId)}
                />
               
            }
        </div>
    )
}