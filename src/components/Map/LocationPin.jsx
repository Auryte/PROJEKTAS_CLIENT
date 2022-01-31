import React from 'react';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import styles from './styles.module.css';

const LocationPin = ({ text }) => {
  return <div className={styles.Pin}>
    <IoLocationSharp/>
    <p className={styles.PinText}>{text}</p>
  </div>;
};

export default LocationPin;
LocationPin.defaultProps = {
  text: ''
};
LocationPin.propTypes = {
  text: PropTypes.string
};
