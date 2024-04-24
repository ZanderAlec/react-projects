import { Header } from "./Header"
import { MovieList } from "./moviesList.js"
import { Search } from "./assets/search.js";
import { MovieInfo } from "./movieInfo.js"
import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch.js";
import { WatchList } from "./Watchlist.js";
import Error from "./Error.js"
import Load from "./Load.js";

export const MoviesPage = () => {

    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [query, setQuery] = useState("");
    const [watchedTime, setWatchedTime] = useState(0); 
    const [queryList, fetchByQuery, fetchById, error, isLoading, controller] = useFetch();
    const [watchList, setWatchList] = useState([]);

    //get the value of the localstorage
    const [likedMovieList, setLikedMovieList] = useState(() => {
        const storedValue = localStorage.getItem("watched");
        // console.log(JSON.parse(storedValue));
        // return JSON.parse(storedValue);
        return [];
    }); 


    function handleLikedMovie(id){
        setLikedMovieList((liked) => [...liked, id])

        // localStorage.setItem("watched", JSON.stringify([...likedMovieList, id]));
    }

    function handleSelectedMovie(id){
        setSelectedMovieId(id);
    }

    function handleCloseSelected(){
        setSelectedMovieId(null);
    }

    function removeLikedMovie(id){
        setLikedMovieList(likedMovieList.filter((value) => value !== id));
    }

    function searchWatchList(id){
        const likedMovie =  likedMovieList.filter(value => value === id);
        return likedMovie.length !== 0;
    }

    useEffect(function (){
        async function fetchMoviesQuery() {
            await fetchByQuery(query);
        }

        fetchMoviesQuery();

        return () => {
            controller.abort();
        }
    }, [query]);

    useEffect(function () {
        async function fetchMoviesLiked(){

            let tempList = [];
            let time = 0;

            for(let id of likedMovieList){
                console.log(id);

                const result = await fetchById(id);
                time += parseInt(result.Runtime.slice(0,3));
                tempList.push(result);
            }

            setWatchList(tempList);
            setWatchedTime(time);
        }

        fetchMoviesLiked()
        
    }, [likedMovieList]);


    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify(likedMovieList));
    }, [likedMovieList])

    return (
        <div className={` bg-sky-950 `}>
            <div class={`h-screen md:px-6 md:pb-9 relative flex flex-col items-stretch	
                ${selectedMovieId  && "sm:w-[51%] lg:w-[67%] "}`}>

                <Header>
                    <Search query={query} setQuery={setQuery} />
                </Header>

                {/*Titulo e infos*/}
                <div className="grow-0  flex flex-col lg:flex-row justify-between items-center	 py-10	">
                    <h2 className="text-white text-2xl	md:text-4xl text-center lg:text-left break-words  px-2 uppercase ">
                        {query ? `Results for  "${query}"` : "My watchlist"}
                    </h2>

                    <div className="flex justify-between text-1xl md:text-2xl	font-light text-white	">
                        {query ? 
                            <h3 >Found {queryList ? queryList.length : "0"} results</h3>
                            : <div className="flex ">
                                <h3 className="pr-2">🎬 {watchList.length} </h3>
                                <h3>⏳{watchedTime} min</h3>
                            </div>}

                    </div>
                </div>

                {/*lista de filmes*/}
                <div className="bg-sky-900 py-8  grow pl-2 sm:pl-0">
                <div className="">
                        {isLoading && <Load/>}

                        {query && error && <Error errorMsg = {error}/>}

                        {/*query list */}
                        {query && !isLoading && !error && 
                            <MovieList setSelectedMovieId={handleSelectedMovie} watched={queryList}/>
                        }

                        {/*Liked list */}
                        {!query && <WatchList watched = {watchList} setSelectedMovieId={handleSelectedMovie}/>
                        } 
                         
                    </div>
                </div>

            </div>

            {/*Filme selecionado*/}
            {selectedMovieId && 
                <MovieInfo 
                setLikedMovie = {handleLikedMovie} 
                removeLikedMovie = {removeLikedMovie}
                onClose = {handleCloseSelected}
                selectedId={selectedMovieId}
                isliked = {searchWatchList(selectedMovieId)}
                />
            }
        </div>
    )
}