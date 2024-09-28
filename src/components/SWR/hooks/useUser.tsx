import useSWR, {mutate} from 'swr';
import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

// Custom hook for dependent requests
export const useUserProfile = (userId: number) => {

  // First fetch: Get user list
  const { data: user, error: userError } = useSWR(userId ? `/users/${userId}` : null, fetcher);

  // Dependent fetch: Get user posts only if user is fetched
  const { data: posts, error: postsError } = useSWR(
    user ? `/users/${userId}/posts` : null,
    fetcher
  );

  return {
    user,
    posts,
    error: userError || postsError,
    isLoading: !user || !posts,
  };
};



// Optimistic update function
export const useUserData = (userId: number) => {
  const { data, error, isValidating } = useSWR(userId ? `/users/${userId}` : null, fetcher);

  const updateUser = async (newData: any) => {
    const previousData = data;
    mutate(`/users/${userId}`, { ...data, ...newData }, false); // Update UI immediately without re-fetching

    try {
      // Send update request to server
      await axiosInstance.put(`/users/${userId}`, newData);
      // Revalidate the data to sync with server response
      mutate(`/users/${userId}`);
    } catch (error) {
      // Roll back if request fails
      mutate(`/users/${userId}`, previousData, false);
    }
  };

  return {
    data,
    error,
    isValidating,
    updateUser,
  };
};