import ArticleCard from './ArticleCard';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => {
  return (
    <div >
      {articles.map((article, index) => (
        <ArticleCard
          key={article._id}
          id={article._id}
          images={article.images}
          mainImage={article.imgMainPath}
          title={article.title}
          text={article.description}
          index={index}
          seoUrl={article.seoUrl}
        />
      ))}
    </div>
  );
};

export default Articles;

Articles.defaultProps = {
  articles: []
};
Articles.propTypes = {
  articles: PropTypes.array
};
