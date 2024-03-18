import { Header } from "./Header"
import { Movie } from "./Movie"
import { Search } from "./assets/search.js";
import { MovieInfo } from "./movieInfo.js"
import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch.js";
import { WatchList } from "./Watchlist.js";

export const MoviesPage = () => {

    const key = "ed7c69f1";

    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [query, setQuery] = useState("");
    const [likedMovieList, setLikedMovieList] = useState([]); 
    const [watchedTime, setWatchedTime] = useState(0); 
    const [queryList, fetchByQuery, fetchById, error, isLoading] = useFetch();
    const [watchList, setWatchList] = useState([]);

    function handleLikedMovie(id){
        setLikedMovieList([id, ...likedMovieList])
    }

    function handleSelectedMovie(id){
        setSelectedMovieId(id);
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
                        {queryList ? `Results of ${query}` : "My Watchlist"}
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
                            return <Movie setSelectedMovieId={() => { setSelectedMovieId(value.imdbID); }} movie={value}/>
                        })}


                        {!query && <WatchList watched = {watchList} setSelectedMovieId={handleSelectedMovie}/>
                        } 
                         

                    </div>
                </div>

            </div>

            {/*Filme selecionado*/}
            {selectedMovieId && 
                <MovieInfo toggleClick={() => setSelectedMovieId(null)} 
                setLikedMovie = {handleLikedMovie} 
                removeLikedMovie = {removeLikedMovie}
                selectedId={selectedMovieId}
                isliked = {searchWatchList(selectedMovieId)}
                />
            }
        </div>
    )
}