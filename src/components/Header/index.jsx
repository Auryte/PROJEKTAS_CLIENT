import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as CloseMenu } from '../../assets/x.svg';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/apple-touch-icon.png';
import styles from './styles.module.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const isLinkActive = () => {
    return ({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`;
  };

  return (
    <header>
      <div className={styles.navbar}>
        <img src={Logo} className={styles.logo} alt="inter design logo" />
        <nav className={click ? `${styles.navOptions} ${styles.active}` : `${styles.navOptions}`}>
          <NavLink to="/" className={isLinkActive()} onClick={closeMobileMenu}> Pagrindinis </NavLink>
          <NavLink to="interjero-dizainas" className={isLinkActive()} onClick={closeMobileMenu}> Interjero dizainas </NavLink>
          <NavLink to="interjero-patarimai" className={isLinkActive()} onClick={closeMobileMenu}> Interjero patarimai </NavLink>
          <NavLink to="kontaktai" className={isLinkActive()} onClick={closeMobileMenu}> Kontaktai </NavLink>
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

export default Header;
