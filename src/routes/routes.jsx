
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../dashboard/dashboardPages/dashboard/Dashboard";
import AddWriter from "../dashboard/dashboardPages/AddWriter/AddWriter";
import News from "../dashboard/dashboardPages/news/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },

  {
    path: "dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard/>
      },
      {
        path: 'addwriter',
        element: <AddWriter/>
      },
      {
        path: 'news',
        element: <News/>
      }
    ]
  },
]);

export default router