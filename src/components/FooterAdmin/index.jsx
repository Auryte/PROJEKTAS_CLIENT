import React from 'react';
import styles from './styles.module.css';

const FooterAdmin = () => {
  return (
    <div className={styles.Container}>
      <p>&copy; {new Date().getFullYear()} Visos teisės saugomos</p>
    </div>
  );
};

export default FooterAdmin;
