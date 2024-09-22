import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Basics from './components/Pages/Basics';
import Counter from "./components/CounterApp/Counter";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";
import Analytics from "./components/Dashboard/Analytics";
import AppDetail from "./components/Dashboard/AppDetail";
import SearchBar from "./components/Dashboard/ui/SearchBar";

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
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },

    {
      path: "/appDetail",
      element: <AppDetail />,
    },
    {
      path: "/search",
      element: <SearchBar />,
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
