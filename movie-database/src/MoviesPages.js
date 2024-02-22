import { Header } from "./Header"
import { Movie } from "./Movie"

export const MoviesPage = () => {
    return (
        <div class="border border-solid border-red-500 h-fit pb-8 bg-sky-950">
            <Header/>

            <div className = "pt-4  sm:flex gap-2">
                <div className="bg-sky-900 py-4">
                    <h2 className ="text-white text-lg	px-2 md:px-8 md:text-xl	">Results of "Algo"</h2>

                    <div className=" mt-2 px-2  md:px-8 sm:flex gap-10">
                        <Movie/>
                        <Movie/>
                        {/* <Movie/> */}
                    </div>
                </div>

                <div className="bg-sky-900 w-full  px-2 py-4 md:px-8 sm:flex gap-10">
                   <h2 className = "text-white">My watchList</h2>
                </div>
                
            </div>
           
        </div>
    )
}