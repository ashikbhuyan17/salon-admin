import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export default function useAuth() {
  const token = Cookies.get(import.meta.env.VITE_COOKIE_LABEL);
  if (token) {
    try {
      const decoded = jwtDecode(token);
      // Ensure token expiration check
      if (decoded.exp * 1000 < Date.now()) {
        logout(); // Implement a logout function to clear token and state
        return { isAuthenticated: false, user: null };
      }
      const { Permission, Role, UserId, UserType } = decoded;

      // console.log(Permission?.split("."));
      // Validate user role and permissions
      if (
        !isValidRole(Role) ||
        !isValidPermissions(Permission) ||
        !isUserTypeValid(UserType)
      ) {
        console.error("Invalid role or permissions");
        logout(); // Implement a logout function to clear token and state
        return { isAuthenticated: false, user: null };
      }

      const user = {
        userId: UserId || "",
        permission: Permission || "",
        userType: UserType || "",
        username: decoded.username || "",
        role: Role || "",
      };

      return { isAuthenticated: true, user };
    } catch (error) {
      console.error("Error decoding token:", error);
      logout();
    }
  }
  return { isAuthenticated: false, user: null };
}
function isValidRole(role) {
  return !!role;
}
function isValidPermissions(permissions) {
  return !!permissions;
}
function isUserTypeValid(userType) {
  if (userType === "Administration") return true;
  else return false;
}
function logout() {
  Cookies.remove(import.meta.env.VITE_COOKIE_LABEL, { path: "/" });
}
