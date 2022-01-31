import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/apple-touch-icon.png';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <nav>
        <ul>
          <img src={Logo} className={styles.footerIcon} alt="" />
          <li><i className={`${styles.icon} fas fa-map-marker-alt`}></i> 3538 Kaunas</li>
          <li><i className={`${styles.icon} fas fa-phone`}></i> + 1123 456 7890</li>
          <li><i className={`${styles.icon} fas fa-envelope`}></i> info@example.com</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <h3>Naudingos nuorodos</h3>
          <Link to='/'><li>  Pagrindinis</li></Link>
          <Link to='/interjero-dizainas'> <li>  Interjero dizainas</li></Link>
          <Link to='/interjero-patarimai'><li>  Interjero patarimai</li></Link>
          <Link to='kontaktai'><li>  Kontaktai</li></Link>
        </ul>
      </nav>

      <div className={styles.stayInTouch}>
        <h3>Stay in Touch</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
        <div className={styles.footerSocialIcons}>
          <a href="https://facebook.com" target="blank"><i
            className={`${styles.icon} fab fa-facebook-square`}></i> </a>
          <a href="https://instagram.com" target="blank"><i
            className={`${styles.icon} fab fa-instagram`}></i></a>
          <a href="https://linkedin.com" target="blank"><i
            className={`${styles.icon} fab fa-linkedin`}></i> </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Visos teisės saugomos</p>
      </div>

    </footer>
  );
};

export default Footer;
