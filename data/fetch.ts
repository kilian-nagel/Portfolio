import { Iresponse } from '../components/interfaces/project';
import { query } from '../components/interfaces/project';

export const fetcher = async <T extends Iresponse>(
    url: string,
    query: query
): Promise<T | undefined> => {
    try {
        const urlWithQuery = `${url}?query=${query}`;

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
        };

        const requestOptions = {
            method: 'GET',
            headers: headers
        };

        const res = await fetch(urlWithQuery, requestOptions);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error for useSWR to handle
    }
};
