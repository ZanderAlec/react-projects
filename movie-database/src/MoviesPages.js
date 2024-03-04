import { Header } from "./Header"
import { Movie } from "./Movie"
import { Search } from "./assets/search.js";
import { MovieInfo } from "./movieInfo.js"
import { useState, useEffect } from "react";

export const MoviesPage = () => {

    const key = "ed7c69f1";

    const [infosToggle, setInfosToggle] = useState(undefined);
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

                if (data.Response === "False")
                    throw new Error("Movie not found");

                setMovieList(data.Search);
                console.log(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovies();

    }, [query]);


    return (
        <div className=" bg-sky-950">

            <div class={` h-screen md:px-6 md:pb-9 relative 	${(infosToggle >= 0) && "w-[67%]			"}`}>
                <Header>
                    <Search query={query} setQuery={setQuery} />
                </Header>

                <div className="pt-8 h-5/6 ">
                    <div className="flex flex-col lg:flex-row justify-between items-center	pb-8	">
                        <h2 className="text-white text-3xl	md:text-5xl text-center lg:text-left break-words pb-2  px-2 ">
                            {query ? `Results of ${query}` : "My Watchlist"}
                        </h2>
                        <div className="flex justify-between text-1xl md:text-2xl	 text-white	">
                            {query ? <h3 >Found {movieList.length} results</h3>
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
                            {!isLoading && !error && movieList.map((value, id) => {
                                return <Movie onInfosToggle={() => { setInfosToggle(id); console.log(id) }} title={value.Title} year={value.Year} img={value.Poster} />
                            })}
                            {error && error}
                        </div>
                    </div>

                </div>

            </div>

            {(infosToggle >= 0) && <MovieInfo toggleClick={() => setInfosToggle(undefined)}>

                <div className="  w-full  h-2/5 xl:h-2/6 mb-4 ">
                    <img className=" mx-auto" src={movieList[infosToggle].Poster} alt="Poster" />
                </div>

                <div className="px-6">
                    <h2 className=" text-white text-3xl pb-2 font-bold	 mb-2">{movieList[infosToggle].Title}</h2>
                    <div className="text-neutral-300 text-1xl">
                        <div className="flex gap-4 mb-2">
                            <p>{movieList[infosToggle].Year}</p>
                            <p> {movieList[infosToggle].Type}</p>
                        </div>

                        <p className="mb-2">Animação, sci-fi, short </p>
                        <p className="mb-6">⭐ 7.8 IMDB RATING</p>

                        <p className="italic text-justify	">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

            </MovieInfo>}

        </div>


    )
}