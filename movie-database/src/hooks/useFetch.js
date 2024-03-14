import {useState} from 'react';

export const useFetch = () => {

    const key = "ed7c69f1";

    const [queryList, setQueryList] = useState([]);
    const [ queryId, setQueryId] = useState()
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovie = async (path) => {
        setError("");
        setIsLoading(true);

        const res = await fetch(path);

        if (!res.ok)
            setError("Something went wrong!");

        const data = await res.json();

        if (data.Response === "False")
            setError("Movie not found");

        setIsLoading(false);
        return data;
    }

    const fetchByQuery = async (query) => {
        setQueryList([]);
        const result = await fetchMovie(`https://www.omdbapi.com/?apikey=${key}&s=${query}`);
        setQueryList(result.Search);
    }

    const fetchById = async (movieId) => {
        const result = await fetchMovie(`https://www.omdbapi.com/?apikey=${key}&i=${movieId}`);
        return result;
    }

    return [queryList, fetchByQuery, fetchById, error, isLoading];
}