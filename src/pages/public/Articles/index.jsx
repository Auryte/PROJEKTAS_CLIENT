import React from 'react';
import Articles from './Articles';
import { Loader } from '../../../components/Loader';
import useGetData from '../../../hooks/useGetData';
import API from '../../../API/get';
import styles from './styles.module.css';

const ArticlesMain = () => {
  const [articles, isLoading] = useGetData(API.getArticles());

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <head>
        <meta name="description" content="Interjero patarimai įsirenginėjantiems būstą" />
        <title>Interjero dizaino patarimai </title>
      </head>
      <main>
        <div className={styles.articlesContainer}>
          <h1 className={styles.articlesTitle}>Interjero patarimai</h1>
          <Articles articles={articles}/>
        </div>
      </main>
    </>
  );
};

export default ArticlesMain;
