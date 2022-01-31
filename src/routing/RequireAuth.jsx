import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const RequireAuth = ({ children }) => {
  const { loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default RequireAuth;

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired
};
