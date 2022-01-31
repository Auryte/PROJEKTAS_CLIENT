import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, className, type, onClick }) => {
  return (
    <div>
      <button className={`${styles[className]}`} onClick={onClick} type={type}>{text}</button>
    </div >
  );
};

export default Button;

Button.defaultProps = {
  type: '',
  onClick: () => {}
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};
