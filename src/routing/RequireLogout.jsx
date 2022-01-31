import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RequireLogout = ({ children }) => {
  const { loggedIn } = useContext(UserContext);
  if (!loggedIn) {
    return children;
  }
  return <Navigate to='/manage-projects'/>;
};

export default RequireLogout;

RequireLogout.propTypes = {
  children: PropTypes.node.isRequired
};
