import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ManageItemsTable = ({ children, title, link }) => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.BtnContainer}>
        <h2>{title}</h2>
        <Link to={link}>
          <Button text='Kurti naują' className='btnOutlinedBlackText'/>
        </Link>
      </div>
      <table className={styles.Table}>
        <thead className={styles.Thead}>
          <tr>
            <th>Pavadinimas</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItemsTable;
ManageItemsTable.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
