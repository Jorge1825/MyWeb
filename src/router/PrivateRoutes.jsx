import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoutes = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
