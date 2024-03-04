import heartIcon from "./assets/heart-icon.png";
import fillHeartIcon from "./assets/heart-icon-filled.png"
import { useState } from "react";

export const MovieInfo = ({ toggleClick, children }) => {

    const [liked, setLiked] = useState(false);

    return (
        

            <div className="bg-sky-800 w-full h-full sm:w-6/12 lg:w-4/12 fixed top-0 right-0 overflow-y-scroll">

                <button className="text-black bg-white rounded-full text-2xl px-3 pb-1  absolute top-2 right-4" onClick={() => toggleClick()}>x</button>

                <div className=" mb-6 align-center ">
                    {children}
                </div>

            </div> 
        )


}