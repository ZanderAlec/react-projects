import heartIcon from "./assets/heart-icon.png";
import fillHeartIcon from "./assets/heart-icon-filled.png"
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const MovieInfo = ({ isliked, selectedId, toggleClick, setLikedMovie, removeLikedMovie}) => {

    const [liked, setLiked] = useState(isliked);
    const [movieDetails, setMovieDetails] = useState({});
    const [, , fetchById, , isLoading] = useFetch();

    function handleLikeClick(){
        liked ? removeLikedMovie(selectedId) : setLikedMovie(selectedId);
        setLiked((prev) => !prev);
    }

    useEffect(function () {
        async function getMovieDetails() {
            const res = await fetchById(selectedId);

            setLiked(isliked);
            setMovieDetails(res);
        }

        getMovieDetails();
    }, [selectedId]);

    return (


        <div className="bg-sky-800 w-full h-full sm:w-6/12 lg:w-4/12 fixed top-0 right-0 overflow-y-scroll">

            <button className="text-black bg-white rounded-full text-2xl px-3 pb-1  absolute top-2 right-4" onClick={() => toggleClick()}>x</button>
            
            <div className=" mb-6 top-0  align-center ">
                <div className="  w-full  h-2/5  md:h-[34rem]  ">
                    <img className=" w-full h-full " src={movieDetails.Poster} alt="Poster" />
                </div>

                <div className="px-6 absolute top-[55%] xl:top-[60%] h-fit bg-sky-800 shadow-[rgba(7,_89,_133,_1)_-10px_0px_20px_20px]">
                    
                    <div className="flex justify-between ">
                        <h2 className="shrink text-white text-3xl pb-2 font-light	 mb-2">{movieDetails.Title}</h2>
                        
                            <img className="w-6 h-6 self-start	ml-2 mt-2 cursor-pointer" alt="like" 
                            src={liked ? fillHeartIcon : heartIcon} 
                            onClick={() => handleLikeClick()}
                            />
                    </div>
                   
                
                    <div className="text-neutral-300 text-1xl">
                        <p className="mb-2">{movieDetails.Released} &bull; {movieDetails.Runtime}</p>
                        
                        <p className="mb-2"> {movieDetails.Genre}</p>

                        <p className="mb-6">⭐ {movieDetails.imdbRating} IMDB RATING</p>

                        <p className="italic text-justify	mb-6">{movieDetails.Plot}</p>

                        <p className="italic text-justify	mb-6">Starring {movieDetails.Actors}</p>

                        <p className="italic text-justify	mb-6">Directed by {movieDetails.Director}</p>
                    </div>
                </div>
            </div>

        </div>
    )


}