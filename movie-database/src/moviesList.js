import { Movie } from "./Movie";

export const MovieList = ({watched, setSelectedMovieId}) => {
    return <div>

        {watched.length > 0 ? 
            watched.map((movie) => {
                return <Movie setSelectedMovieId={setSelectedMovieId} movie={movie} />
            })

            : <p className="text-white text-center">🎬 You haven't liked any movie yet.</p>
        }
    </div>
}