import {useEffect, useState} from 'react';

/**
 * Custom Hook for fetching API data
 * @param url {string} API url
 * @returns {{isLoading: boolean, data: array, hasError: boolean}}
 */
export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        async function simulateSlowFetch(url, delay) {
            await new Promise(resolve => setTimeout(resolve, delay));

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return await response.json();
        }

        (async () => {
            try {
                const data = await simulateSlowFetch(url, 3000);
                setData(data);
            } catch (error) {
                console.log('Error fetching data:', error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        })();

    },
    [url]);

    return {data, hasError, isLoading};
};
