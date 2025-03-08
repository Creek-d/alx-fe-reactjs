import { Navigate, Outlet } from "react-router-dom";

// Simulating a simple authentication hook
const useAuth = () => {
  const user = localStorage.getItem("user"); // Check if a user is stored in localStorage
  return user ? true : false;
};

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
