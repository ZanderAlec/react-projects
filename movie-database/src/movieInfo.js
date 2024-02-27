import heartIcon from "./assets/heart-icon.png";

export const MovieInfo = () => {
    return <div className="bg-sky-800 h-full w-full md:w-5/12	 absolute top-0 right-0 px-8 overflow-y-scroll ">

        <div className="w-full text-right  ">
            <button className="text-white text-4xl	  ">x</button>
        </div>


        <div className="  w-6/12 md:w-7/12 mx-auto  h-1/5 md:h-3/5	">
            <img className="w-full h-full" src="https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg" alt="Poster"/>
        </div>


        <div className=" my-6 align-center ">
            <div className="flex w-full justify-between items-center		">
                <h2 className=" text-white text-3xl pb-2 font-semibold	">Titulo</h2>
                <img className="w-4 h-4	hover:cursor-pointer " src={heartIcon} alt="like"/>
            </div>
            
            <div className="flex justify-between">
                <h3 className="text-white">Autor tal</h3>
                <p className="text-neutral-300">1994</p>
            </div>
            <p className="pt-4 text-neutral-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

    </div>
}