/* eslint-disable prettier/prettier */

// project imports

import AppLayout from "../layouts/app/AppLayout";
import Appointment from "../pages/Appointment";
import Dashboard from "../pages/Dashboard";
import Service from "../pages/Service";
import PrivateRoute from "./PrivateRoute";


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: "app",  // Remove the leading slash from the path
    element: <PrivateRoute />,
    children: [
        {
            path: "",  // Remove the leading slash from the path
            element: <AppLayout />,
            children: [
                {
                    path: "",  // Remove the leading slash from the path
                    element: <Dashboard />,
                },
                {
                    path: "appointment",  // Remove the leading slash from the path
                    element: <Appointment />,
                },
                {
                    path: "service",  // Remove the leading slash from the path
                    element: <Service />,
                },
            ]
        },
    ],
};

export default MainRoutes;
