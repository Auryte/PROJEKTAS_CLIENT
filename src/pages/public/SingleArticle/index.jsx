import { Link, useParams } from 'react-router-dom';
import API from '../../../API/get';
import { Loader } from '../../../components/Loader';
import useGetData from '../../../hooks/useGetData';
import styles from './styles.module.css';

const SingleArticle = () => {
  const { seoUrl } = useParams();
  const [article, isLoading] = useGetData(API.getArticleBySeoUrl(seoUrl));
  const { _id, title, imgMainPath, images, description, metaTitleTag, metaDescription } = article;
  if (isLoading) {
    return <Loader />;
  }

  return (
    <html>
      <head>
        <meta name="description" content={metaDescription} />
        <title>{metaTitleTag}</title>
      </head>
      <body>
        <div className={styles.articleMain}>
          {article
            ? (
              <div key={_id} className={styles.articleContainer}>
                <div className={styles.articleTitleBox}>
                  <h2 className={styles.singleArticleTitle}>{title}</h2>
                  <Link to='/interjero-patarimai'>
                    <h4 className={styles.articleLink}>Visi straipsniai</h4>
                  </Link>
                </div>
                <div className={styles.articleContent}>
                  <img src={imgMainPath} alt="" className={styles.articleImage} />
                  <p className={styles.articleText}>{description}</p>
                </div>
                <div className={styles.imagesContainer}>
                  {images && images.length > 0 &&
                    images.map(image => (
                      <img key={_id} src={image} alt="" className={styles.Images}/>
                    ))
                  }
                </div>
              </div>
            )
            : null
          }
        </div>
      </body>
    </html>
  );
};

export default SingleArticle;
