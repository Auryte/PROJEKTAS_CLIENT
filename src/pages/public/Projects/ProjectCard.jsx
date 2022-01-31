import React from 'react';
import PropTypes from 'prop-types';
import { isCardIndexEven } from '../../../utils/cardIndex';
import { truncateText } from '../../../utils/text';
import styles from './styles.module.css';

const ProjectCard = (props) => {
  const { title, text, index, mainImage, images } = props;
  const maxCharacters = 600;
  const smallImagesAmountInCard = 4;

  return (
    <div className={isCardIndexEven(index) ? styles.projectCardContainer : styles.projectCardContainerReverse}>
      <div className={styles.projectImagesContainer}>
        <img className={styles.projectMainImage} src={mainImage} alt="" />
        <div className={styles.projectImgGrid}>
          {images.map((image, index) => (
            index < smallImagesAmountInCard ? <img key={index} src={image} alt="interjero vaizdas" /> : null
          ))}
        </div>
      </div>
      <div className={styles.projectTextContainer}>
        <h1>{title}</h1>
        <p>{truncateText(text, maxCharacters)}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.defaultProps = {
  title: '',
  text: '',
  index: '',
  mainImage: '',
  images: []
};
ProjectCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
  mainImage: PropTypes.string,
  images: PropTypes.array
};
