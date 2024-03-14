import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register/Reginter";

export default function BaseRoutes() {
    return (
        <Routes>
            <Route path="*" element={<WebsiteLayout />}>
                <Route path="" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
}
