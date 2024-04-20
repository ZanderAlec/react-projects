import {useState} from 'react';

export const useFetch = () => {

    const key = "ed7c69f1";

    const [queryList, setQueryList] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const controller = new AbortController();


    const fetchMovie = async (path) => {
        //Used to cleanUp the fetch

        try{

        setError("");
        setIsLoading(true);

        const res = await fetch(
            path, 
            {signal: controller.signal}
        );

        if (!res.ok)
            throw new Error("Something went wrong!");

        const data = await res.json();

        if (data.Response === "False")
            throw new Error("No results found");

        setError("");
        return data;

        }catch(err){

            if(error.name !== "AbortError")
            setError(err.message);

        }finally{
            
            setIsLoading(false);
        }
    }

    const fetchByQuery = async (query) => {
        setQueryList([]);
        const result = await fetchMovie(`https://www.omdbapi.com/?apikey=${key}&s=${query}`);
        setQueryList(result? result.Search : result);
    }

    const fetchById = async (movieId) => {
        const result = await fetchMovie(`https://www.omdbapi.com/?apikey=${key}&i=${movieId}`);
        return !error ? result : "";
    }

    return [queryList, fetchByQuery, fetchById, error, isLoading, controller];
}