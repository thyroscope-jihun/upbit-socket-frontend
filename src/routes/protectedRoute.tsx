import React from "react";
import { Navigate, Link } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};
export default ProtectedRoute;
