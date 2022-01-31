import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initValue = {
  loggedIn: false,
  setLoggedIn: () => {
    throw new Error('Please use UxerContextProvider');
  }
};

const UserContext = createContext(initValue);

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [loggedIn, setLoggedIn] = useState(!!token);
  const [userId, setUserId] = useState('');

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, userId, setUserId }}>
      {children}
    </UserContext.Provider >
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default UserContext;
