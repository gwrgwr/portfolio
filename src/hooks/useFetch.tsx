import { useState } from "react";
import GitHubUser from "../entities/GitHubUser.ts";

type FetchState<T> = {
    data: T | null;
    error: string | null;
    loading: boolean;
    request: (url: string, options: any) => Promise<void>;
};

const useFetch = (): FetchState<GitHubUser> => {
    const [data, setData] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const request = async (url: string, options: any) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (!response.ok) {
                throw new Error('Request failed');
            }
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
            setData(json);
        }
    }
    return {data, error, loading, request};
}

export default useFetch;