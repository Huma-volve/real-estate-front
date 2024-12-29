import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PropTypes from 'prop-types';

function RoleProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      navigate("/not-authorized");
    }
  }, [allowedRoles, user, navigate]);

  return user && allowedRoles.includes(user.role) ? children : null;
}
RoleProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoleProtectedRoute;

