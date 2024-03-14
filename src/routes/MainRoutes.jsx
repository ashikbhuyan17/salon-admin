/* eslint-disable prettier/prettier */
import { lazy } from "react";

// project imports
import MainLayout from "~/layout/MainLayout";
import Loadable from "~/ui-component/loader/Loadable";

import { Navigate } from "react-router-dom";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import("~/views/dashboard/Default/index.j")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: "/",
    element: <PrivateRoute />,
    children: [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <DashboardDefault />,
                },
            ]
        },

        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ],
};

export default MainRoutes;
