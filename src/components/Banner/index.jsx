import React from 'react';
import { Link } from 'react-router-dom';
import titleImage from '../../assets/Sanciai interjeras originalus dydis 13m.jpg';
import Button from '../Button';
import styles from './styles.module.css';

const Banner = () => {
  return (
    <div className={styles.bannerBox}>
      <img className={styles.bannerImg} src={titleImage} alt="Interjero dizainas foto" />
      <div className={styles.bannerTitle}>Interjero projektas</div>
      <div className={styles.bannerSubtext}>dizainas Aurėjos Šlančės</div>
      <Link to='/interjero-dizainas/namo-kaune-interjero-projektas'>
        <div className={styles.bannerBtnBox}>
          <Button text='Peržiūrėti' className='btnOutlined'/>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
