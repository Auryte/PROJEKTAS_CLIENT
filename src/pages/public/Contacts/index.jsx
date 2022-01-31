import React from 'react';
import Map from '../../../components/Map/Map';
import Logo from '../../../assets/apple-touch-icon.png';
import styles from './styles.module.css';

const location = {
  lat: 54.9044323908739,
  lng: 23.896141715340754
};
const Contacts = () => {
  return (
    <div className={styles.contactsMain}>
      <Map location={location} zoomLevel={17}/>
      <div className={styles.TextBox}>
        <ul>
          <div className={styles.LogoContainer}>
            <img src={Logo} className={styles.Logo} alt="" /> <h3>Interjero projektai</h3>
          </div>
          <li><i className={`${styles.Icon} fas fa-map-marker-alt`}></i> Adresas: XYZssss g. Kaunas LT-53945</li>
          <li><i className={`${styles.Icon} fas fa-phone`}></i> + 1123 456 7890</li>
          <li><i className={`${styles.Icon} fas fa-envelope`}></i> info@example.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
