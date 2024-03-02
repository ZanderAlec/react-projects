import heartIcon from "./assets/heart-icon.png";
import fillHeartIcon from "./assets/heart-icon-filled.png"
import { useState } from "react";

export const MovieInfo = ({ toggleClick }) => {

    const [liked, setLiked] = useState(false);

    return <div className="bg-sky-800 h-full w-full  sm:w-6/12 lg:w-4/12  	 absolute top-0 right-0 overflow-y-scroll ">

        <div className="  w-full  h-2/5	 xl:h-5/6	relative">
            <img className="w-full h-full" src="https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg" alt="Poster" />
            <button className="text-white text-4xl p-4 absolute top-0 right-0" onClick={() => toggleClick(false)}>x</button>
        </div>


        <div className=" my-6 align-center px-6">
            
            <div className="flex w-full justify-between items-center	mb-2	">
                <h3 className="pr-2 text-1xl text-white font-light	">
                    <span className="text-2xl font-normal	">⭐0/</span>10
                </h3>
                <img className="w-4 h-4	hover:cursor-pointer" src={liked ? fillHeartIcon : heartIcon} alt="like" onClick={() => setLiked(prev => !prev)} />
            </div>

            <h2 className=" text-white text-3xl pb-2 font-bold	">Titulo</h2>
            <p className=" text-neutral-300 text-1xl mb-4">1994</p>


            <p className="pt-4 text-neutral-300 text-justify border-t border-solid border-neutral-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

    </div>
}