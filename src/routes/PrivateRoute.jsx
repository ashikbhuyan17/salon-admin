/* eslint-disable prettier/prettier */
import { Outlet } from "react-router-dom";

function PrivateRoute() {


  // return user ? <Outlet /> : <Navigate to="/login" replace />;
  return <Outlet />;
}

export default PrivateRoute;
