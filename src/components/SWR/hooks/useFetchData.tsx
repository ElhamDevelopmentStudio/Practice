import useSWR, { mutate } from "swr";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const useFetchData = (url: string, params?: any) => {
    const fullUrl = url.startsWith('/') ? url : `/${url}`;

    // fetcher function to fetch data from the API
    const fetcher = (url: string) => axiosInstance.get(url, { params }).then((res) => res.data);

    // useSWR hook to fetch data from the API
    const { data, error, isLoading } = useSWR(fullUrl, fetcher, { revalidateOnFocus: false });

    // return the data, error, and isLoading
    return { data, error, isLoading};
};



export const useAddData = (url: string) => {

    const addData = async (data: any) => {
        await axiosInstance.post(url, data);

        // mutate the data to update the cache
        mutate(url);
    }

    return { addData };
}

 
export const Profile = (url: string) => {

    const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

    const { data, error, isLoading } = useSWR(url, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // render data
    return <div>hello {data.name}!</div>
}

