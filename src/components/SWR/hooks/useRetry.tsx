import useSWR from 'swr';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export const useFetchWithRetry = (url: string, ) => {
  const { data, error, isValidating, mutate } = useSWR(
    url,
    fetcher,
    {
      // Custom retry logic
      // @ts-ignore
      onErrorRetry: (error, key, config, revalidate, { retryCount = 3 }) => {
        console.log(`error retrying for the ${retryCount} time`);
        if (error.status === 404) return; // Show a custom 404 page
        if (retryCount >= 3) return; // Stop retrying after 3 attempts and show a custom error
        
        // Retry after 5 seconds
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
      revalidateOnFocus: false, // Do not revalidate on focus
    }
  );

  return { data, error, isValidating, mutate };
};