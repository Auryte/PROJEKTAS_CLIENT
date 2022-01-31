import { Link } from 'react-router-dom';
import About from '../../../components/About';
import Banner from '../../../components/Banner';
import Button from '../../../components/Button';
import API from '../../../API/get';
import styles from './styles.module.css';
import ProjectCard from '../Projects/ProjectCard';
import ArticleCard from '../Articles/ArticleCard';
import useGetData from '../../../hooks/useGetData';
import { Loader } from '../../../components/Loader';

const Home = () => {
  const [projects, isLoadingProjects] = useGetData(API.getTwoProjects());
  const [articles, isLoadingArticles] = useGetData(API.getTwoArticles());

  return (
    <div>
      <Banner />
      <About />
      <h2 className={styles.projectsTitle}>Naujausi interjerai</h2>
      {isLoadingProjects ? <Loader /> : null}
      {projects.map((project, index) => (
        <Link key={project._id} to={`/interjero-dizainas/${project.seoUrl}`} className={styles.projectLink}>
          <ProjectCard
            images={project.images}
            mainImage={project.imgMainPath}
            title={project.title}
            text={project.description}
            index={index}
          />
        </Link>
      ))}
      <Link to='/interjero-dizainas' className={styles.btnContainedLink}>
        <div className={styles.homeBtnContainer} >
          <Button text='Daugiau interjerų' className='btnContained' />
        </div>
      </Link>
      <div className={styles.articlesContainer}>
        <h2 className={styles.articlesTitle}>Interjero patarimai</h2>
        {isLoadingArticles ? <Loader /> : null}
        {articles.map((article, index) => (
          <ArticleCard
            key={article._id}
            images={article.images}
            mainImage={article.imgMainPath}
            title={article.title}
            text={article.description}
            index={index}
            link={`/interjero-patarimai/${article.seoUrl}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
