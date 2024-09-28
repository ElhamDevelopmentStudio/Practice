import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Basics from './components/Pages/Basics';
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";
import Analytics from "./components/Dashboard/Analytics";
import AppDetail from "./components/Dashboard/AppDetail";
import SearchBar from "./components/Dashboard/ui/SearchBar";
import SwrPractice from './components/Pages/SwrPractice';
import DependantRequest from './components/SWR/components/DependantRequest';
import { RetryComponent } from './components/SWR/components/RetryComponent';
import UserList from './components/zustand/components/counter/UserList';
import Counter from './components/zustand/components/counter/Counter';

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
    {
      path: "/swr",
      element: <SwrPractice />,
    },
    {
      path: "/dependantRequest",
      element: <DependantRequest />,
    },
    {
      path: "/retryComponent",
      element: <RetryComponent />,
    },
    {
      path: "/zustand/counter",
      element: <Counter />,
    },
    {
      path: "/zustand/userList",
      element: <UserList />,
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
