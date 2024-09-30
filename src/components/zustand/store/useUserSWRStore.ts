import useSWR from 'swr';
import axios from "axios";

interface User {
    id: number;
    name: string;
}

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

const useUserSWRStore = () => {
    const { data: users, error, isLoading, mutate } = useSWR<User[]>('/users', fetcher);

    return {
        users,
        isLoading,
        error: error ? error.message : null,
        refetchUsers: mutate
    };
};

export default useUserSWRStore;