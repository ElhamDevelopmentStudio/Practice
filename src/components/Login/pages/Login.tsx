
import React, { Suspense } from 'react'
import { useAuthStore } from '../store/authStore'
import { Button } from '@/components/ui/button'
import {LoginForm} from '../components/LoginForm'

const Login: React.FC = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const user = useAuthStore(state => state.user)
  const logout = useAuthStore(state => state.logout)

  if (isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl mb-4">Welcome, {user}!</h1>
        <Button onClick={logout}>Logout</Button>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}

export default Login

