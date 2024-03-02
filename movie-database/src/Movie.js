export const Movie = ({onInfosToggle, clicked, title, year, img  }) => {
    return (
    <div className={` w-full md:w-40	mb-4 flex md:flex-col pb-2 brightness-75 hover:cursor-pointer	hover:brightness-100 ${clicked && "brightness-100"}`}
        onClick={() => onInfosToggle(true)}
    >
             <div className = "w-20	 md:w-full ">
               <img className="w-full block border-t-rounded-md	" src={img} alt="Poster"/>
            </div>

            <div className="pt-1 w-full px-2">
                <h2 className=" text-white text-2xl pb-1">{title}</h2>
                <div className="flex justify-between text-neutral-300">
                    <p >{year}</p>
                </div>
            </div>
        </div>
    );
}