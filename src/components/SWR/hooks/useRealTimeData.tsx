import useSWR, { mutate } from 'swr';
import { useEffect } from 'react';
import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

// Custom hook for WebSocket-based real-time updates
export const useRealTimeData = (url: string) => {
  const { data, error, isValidating } = useSWR(url, fetcher);

  useEffect(() => {
    // Simulate WebSocket connection
    const socket = new WebSocket('ws://example.com/socket');

    socket.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);

      // Update SWR cache with real-time data
      mutate(url, updatedData, false);
    };

    return () => {
      socket.close(); // Cleanup WebSocket on component unmount
    };
  }, [url]);

  return { data, error, isValidating };
};
