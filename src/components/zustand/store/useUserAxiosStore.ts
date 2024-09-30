import axios from "axios";
import { create } from "zustand";

interface User {
    id: number;
    name: string
}

interface UserAxiosState {
    users: User[];
    fetchUsers: () => Promise<void>;
}

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const useUserAxiosStore = create<UserAxiosState>((set) => ({
    users: [],
    fetchUsers: async () => {
        try {
            const response = await axiosInstance.get('/users');
            set({ users: response.data });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
}))

export default useUserAxiosStore;