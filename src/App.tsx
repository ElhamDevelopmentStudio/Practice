import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Basics from './components/Pages/Basics';
import Counter from "./components/CounterApp/Counter";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import Analytics from "./components/Dashboard/Analytics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Basics />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
  ]);

  return (
    <>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </>
  );
}

export default App
