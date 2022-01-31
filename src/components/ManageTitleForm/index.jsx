import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const TitleItem = ({ item, onClick, linkUpdate, linkView }) => {
  const { title, createdAt } = item;

  return <tr className={styles.TableRow} >
    <td className={styles.Title}>{title}
      <div className={styles.HoverTextContainer}>
        <Link to={linkUpdate}><span>Redaguoti</span></Link>
        <span onClick={onClick}>Trinti</span>
        <Link to={linkView}> <span>Peržiūrėti</span> </Link>
      </div> </td>
    <td className={styles.TableDataDate}><span>Paskelbtas</span> <span>{moment(new Date(createdAt)).format('YYYY-MM-DD')}</span> </td>
  </tr>;
};

export default TitleItem;

TitleItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  linkUpdate: PropTypes.string.isRequired,
  linkView: PropTypes.string.isRequired
};
