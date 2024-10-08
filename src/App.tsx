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
import Temprature from './components/zustand/components/Temprature';
import Logger from './components/zustand/components/Logger';
import UserAxios from './components/zustand/components/UserAxios';
import UsersSWR from './components/zustand/components/UsersSWR';
import { ThemeProvider } from './components/ThemeProvider';
import AdminPanel from './components/Sidebar/AdminPanel';
import { DateRangePicker } from './components/DatePicker/DateRangePicker';
import Login from './components/Login/pages/Login';
import Navbar from "./components/Navbar/navbar";
import MembersList from "./components/Sidebar/_components/data-table/MembersList";
import { AdminSettingsPage } from "./pages/admins-settings";
import PermissionsManager from "./pages/admin-setting";
import OrganizationProfile from "./pages/organization-list";

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
    {
      path: "/zustand/temprature",
      element: <Temprature />,
    },
    {
      path: "/zustand/logger",
      element: <Logger />,
    },
    {
      path: "/zustand/userAxios",
      element: <UserAxios />,
    },
    {
      path: "/zustand/usersSWR",
      element: <UsersSWR />,
    },
    {
      path: "/sidebar",
      element: <AdminPanel />,
    },
    {
      path: "/navbar",
      element: <Navbar userName="Fatma Basir" userImage="/logo.svg" />,
    },
    {
      path: "/dateRangePicker",
      element: (
        <DateRangePicker
          onUpdate={(values) => console.log(values)}
          initialDateFrom="2023-01-01"
          initialDateTo="2023-12-31"
          align="start"
          locale="en-GB"
          showCompare={false}
        />
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/data",
      element: <MembersList />,
    },
    {
      path: "/admin-settings",
      element: <AdminSettingsPage />,
    },
    {
      path: "/admin-setting",
      element: <PermissionsManager />,
    },
    {
      path: "/org-profile",
      element: <OrganizationProfile />,
    },
  ]);

  return (
    <>
      <ThemeProvider defaultTheme="light">
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
}

export default App
