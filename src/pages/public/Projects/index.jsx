import API from '../../../API/get';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import useGetData from '../../../hooks/useGetData';
import { Loader } from '../../../components/Loader';
import styles from './styles.module.css';

const Projects = () => {
  const [projects, isLoading] = useGetData(API.getProjects());

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <head>
        <meta name="description" content="Interjero dizaino projektavimas įvairios paskirties erdvėms" />
        <title>Interjero dizaino projektai </title>
      </head>
      <main>
        <div className={styles.projectsMain}>
          <h1>Interjero dizainas</h1>
          <h2 className={styles.projectsSubtitle}> Interjero projektai</h2>
          {projects.map((project, index) => (
            <Link key={project._id} to={`${project.seoUrl}`} className={styles.projectLink}>
              <ProjectCard
                key={project._id}
                images={project.images}
                mainImage={project.imgMainPath}
                title={project.title}
                text={project.description}
                index={index}
                seoUrl={project.seoUrl}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
