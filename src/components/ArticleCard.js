// ArticleCard.js
import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card mx-2"> {/* Add mx-2 for horizontal margin */}
      <img src={article.image} alt={article.title} className="article-image" />
      <h3 className="article-title">{article.title}</h3>
      <p className="article-description">{article.description}</p>
      <button className="read-more-button">Read more</button>
    </div>
  );
};

export default ArticleCard;
