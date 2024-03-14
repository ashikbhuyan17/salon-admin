
// export default function BaseRoutes() {
//     return (
//         // <Routes>
//         //     <Route path="*" element={<WebsiteLayout />}>
//         //         <Route path="" element={<Login />} />
//         //         <Route path="login" element={<Login />} />
//         //         <Route path="register" element={<Register />} />
//         //     </Route>
//         // </Routes>
//     );
// }

import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";
import MainRoutes from "./MainRoutes";


export default function BaseRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes]);
}