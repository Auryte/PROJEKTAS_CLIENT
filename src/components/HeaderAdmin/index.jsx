import React, { useState, useContext, useEffect } from 'react';
import decode from 'jwt-decode';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as CloseMenu } from '../../assets/x.svg';
import Logo from '../../assets/apple-touch-icon.png';
import useGetData from '../../hooks/useGetData';
import API from '../../API/get';
import styles from './styles.module.css';
import UserContext from '../../contexts/UserContext';

const HeaderAdmin = () => {
  const { setLoggedIn } = useContext(UserContext);
  const [users] = useGetData(API.getUsers());
  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    setClick(false);
    window.localStorage.removeItem('token');
    setLoggedIn(false);
  };

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp < Date.now() / 1000) logout();
    }
  }, [location]);

  const isLinkActive = () => {
    return ({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`;
  };
  return (
    <header>
      <div className={styles.navbar}>
        <img src={Logo} className={styles.logo} alt="inter design logo" />
        <nav className={click ? `${styles.navOptions} ${styles.active}` : `${styles.navOptions}`}>
          <NavLink to="/manage-projects" className={isLinkActive()} onClick={closeMobileMenu}> Projektai </NavLink>
          <NavLink to="/manage-articles" className={isLinkActive()} onClick={closeMobileMenu}> Straipsniai </NavLink>
          <NavLink to="/" className={isLinkActive()} onClick={closeMobileMenu}> Į pagrindinį </NavLink>
          <NavLink to={`profile/${users[0]?._id}`} className={isLinkActive()} onClick={closeMobileMenu}> Profilis </NavLink>
          <NavLink to="/login" className={isLinkActive()} onClick={logout}> Atsijungti </NavLink>
        </nav>
        <div className={styles.mobileMenu} onClick={handleClick}>
          {click
            ? (
              <CloseMenu className={styles.menuIcon} />
            )
            : (
              <MenuIcon className={styles.menuIcon} />
            )}
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
