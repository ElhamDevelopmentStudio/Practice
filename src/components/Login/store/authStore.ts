import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (username: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    set({ isAuthenticated: true, user: username })
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}))