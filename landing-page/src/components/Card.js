export const Card = ({title, text, img}) => {
    return <div className = "border border-solid border-gray-300 rounded-lg bg-gray-100 md:w-[24%]  py-6 p-2">
        
        <h2 className="font-bold mb-2">{title}</h2>

        <p className="text-sm mb-2">{text}</p>
       
        <a className = "underline decoration-solid font-bold" href="#">learn more</a>
        
        <div class=" mt-2 ">
            <img className=" rounded-lg w-full " src={img} alt=""/>
        </div>
    </div>
}