/* eslint-disable prettier/prettier */

// project imports

import AppLayout from "../layouts/app/AppLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register/Register";
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
                    element: <Register />,
                },
                {
                    path: "login",  // Remove the leading slash from the path
                    element: <Login />,
                },
            ]
        },
    ],
};

export default MainRoutes;
