import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the User type
type User = {
  id: number;
  name: string;
  email: string;
};

// Define the store state type
type StoreState = {
  count: number;
  users: User[];
  loading: boolean;
  error: string | null;

  // Actions
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  fetchUsers: () => Promise<void>;

  // Derived state
  doubleCount: () => number;
};

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      count: 0,
      users: [],
      loading: false,
      error: null,

      // Actions
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),

      // Async action to fetch users
      fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          set({ users: data, loading: false });
        } catch (error) {
          set({ error: 'Failed to fetch users', loading: false });
        }
      },

      // Derived state (computed)
      doubleCount: () => get().count * 2,
    }),
    {
      name: 'app-store', // Local storage key
      getStorage: () => localStorage, // Store in localStorage
    }
  )
);

export default useStore;