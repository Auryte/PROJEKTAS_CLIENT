import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const PopUp = (props) => {
  const { content, handleCloseCancel } = props;
  return (
    <div className={styles.MainContainer} >
      <div className={styles.PopUpContainer}>
        <button onClick={handleCloseCancel} className={styles.Close} >&#215;</button>
        <div className={styles.Content}>{content}</div>
      </div>
    </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  content: PropTypes.node.isRequired,
  handleCloseCancel: PropTypes.func.isRequired
};
