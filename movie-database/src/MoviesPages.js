import { Header } from "./Header"
import { Movie } from "./Movie"
import { MovieInfo } from "./movieInfo.js"

export const MoviesPage = () => {
    return (
        <div class=" h-full sm:h-screen md:px-6 md:pb-9 bg-sky-950 relative">
            <Header/>

            <div className = "pt-8 h-5/6">
                <div className="flex flex-col lg:flex-row justify-between items-center	pb-8	">
                    <h2 className ="text-white text-3xl	text-center lg:text-left break-words pb-2 md:text-5xl	px-2 ">Results of "Algo"</h2>
                    <div className="flex justify-between text-2xl	 text-white	">
                        {/* <h3>🎬 0</h3>
                        <h3>⭐ 0</h3>
                        <h3>⏳ 0 min</h3> */}
                        <h3 >Found 0 results</h3>
                    </div>
                </div>

                <div className="bg-sky-900 py-8 w-full  h-90 	">
                    <div className="mt-2 px-2 md:px-8 flex justify-center	lg:justify-normal gap-2 sm:gap-6 h-full flex-wrap	">
                        <Movie/>
                        <Movie/>
                        <Movie/>
                        <Movie/>
                        <Movie/>
                        <Movie/>
                    </div>
                </div>
                
            </div>

            <MovieInfo/>
           
        </div>
    )
}