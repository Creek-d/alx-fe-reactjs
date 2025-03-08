import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = false; // Change this to `true` to test protected routes

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
