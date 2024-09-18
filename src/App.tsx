import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Basics from './components/Pages/Basics';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Basics />,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
