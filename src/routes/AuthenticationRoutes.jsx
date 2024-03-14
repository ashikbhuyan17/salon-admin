/* eslint-disable prettier/prettier */

// project imports
import WebsiteLayout from "../layouts/website";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register/Register";

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import("")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: "/",
    element: <WebsiteLayout />,
    children: [
        {
            path: "",
            element: <Login />,
        },
        {
            path: "register",
            element: <Register />,
        },
    ],
};

export default AuthenticationRoutes;
