import { Link, useParams } from 'react-router-dom';
import API from '../../../API/get';
import { truncateText, truncatedTextRemainder } from '../../../utils/text';
import useGetData from '../../../hooks/useGetData';
import styles from './styles.module.css';
import { Loader } from '../../../components/Loader';

const SingleProject = () => {
  const { seoUrl } = useParams();
  const maxCharacters = 900;
  const [project, isLoading] = useGetData(API.getProjectBySeoUrl(seoUrl));
  const { images, metaTitleTag, metaDescription } = project;

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
        <div className={styles.projectMain}>
          <div className={styles.projectTitleBox}>
            <h1 className={styles.projectTitle}>{project?.title}</h1>
            <Link to='/interjero-dizainas' >
              <h4 className={styles.projectLink}>Visi projektai</h4>
            </Link>
          </div>
          {
            images
              ? <div className={styles.mainImagesContainer}>
                <div className={styles.firstImageContainer}>
                  <img className={styles.firstImage} src={project.images[0]} alt="" />
                  <div className={styles.imgAndTextContainer}>
                    <img className={styles.scndImage} src={project.images[1]} alt="" />
                    <div className={styles.textFirstPart}><p >{truncateText(project.description, maxCharacters)}</p></div>
                  </div>
                </div>
                <div className={styles.secndImagesContainer}>
                  <div className={styles.smallImagesContainer}>
                    <img className={styles.smallImage} src={project.images[2]} alt="" />
                    <img className={styles.smallImage} src={project.images[3]} alt="" />
                  </div>
                  <img className={styles.secondImagesContainerImage} src={project.images[4]} alt="" />
                </div>
                <div className={styles.thirdImagesContainer}>
                  <img className={styles.thirdImagesContainerImage} src={project.images[5]} alt="" />
                  <div className={styles.textScndPart}><p >{truncatedTextRemainder(project.description, maxCharacters)}</p></div>
                </div>
                <div className={styles.fourthImagesContainer}>
                  <div className={styles.fourthImgContainerImg}><img className={styles.fourthImagesImage1} src={project.images[6]} alt="" /></div>
                  <div className={styles.fourthImgContainerImgScnd}><img className={styles.fourthImagesImage2} src={project.images[7]} alt="" /></div>
                </div>
              </div>
              : <Loader />
          }
        </div>
      </body>
    </html>
  );
};

export default SingleProject;
