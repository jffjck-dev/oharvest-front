import {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * Custom Hook for fetching API data
 * @param url {string}
 * @returns {{isLoading: boolean, data: array<object>, error: object}}
 */
export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(()=> {
            axios.get(url)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    setHasError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 3000);
    },
    [url]);

    return {data, hasError, isLoading};
};