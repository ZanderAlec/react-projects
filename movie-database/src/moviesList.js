import { Movie } from "./Movie";

export const MovieList = ({watched, setSelectedMovieId}) => {
    return <div className="mx-4 flex p-2 gap-2 xl:gap-6  flex-wrap">

        {watched.length > 0 ? 
            watched.map((movie) => {
                return <Movie setSelectedMovieId={setSelectedMovieId} movie={movie} />
            })

            : <p className="text-white text-center">🎬 You haven't liked any movie yet.</p>
        }
    </div>
}