import { Movie } from "./Movie";

export const WatchList = ({watched, setSelectedMovieId}) => {
    return <div className="mx-4 flex p-2 gap-2 xl:gap-6  flex-wrap">

        {watched.length > 0 ? 
            watched.map((movie) => {
                return <Movie setSelectedMovieId={setSelectedMovieId} movie={movie} />
            })

            : <p className="text-white text-center m-auto">🎬 You haven't watched any movies yet.</p>
        }
    </div>
}