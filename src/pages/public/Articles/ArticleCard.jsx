import React from 'react';
import { Link } from 'react-router-dom';
import { isCardIndexEven } from '../../../utils/cardIndex';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import { truncateText } from '../../../utils/text';
import styles from './styles.module.css';

const ArticleCard = (props) => {
  const { title, text, mainImage, index, link, seoUrl } = props;
  const maxCharacters = 400;

  return (
    <div className={isCardIndexEven(index) ? styles.articleCardContainer : styles.articleCardContainerReverse}>
      <img className={styles.articleMainImage} src={mainImage} alt="" />
      <div className={styles.articleTextContainer}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.articleDescription}>{truncateText(text, maxCharacters)}</p>
        <Link to={link || `${seoUrl}`} className={styles.articleBtnLink}>
          <Button className='btnOutlinedBlackText' text='Skaityti daugiau' />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;

ArticleCard.defaultProps = {
  id: '',
  link: '',
  seoUrl: ''
};
ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  mainImage: PropTypes.string.isRequired,
  id: PropTypes.string,
  link: PropTypes.string,
  seoUrl: PropTypes.string
};
