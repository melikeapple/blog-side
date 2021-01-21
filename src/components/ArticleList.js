import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => (
  <>
    {articles.map((article, index) => (
      <Link key={index} to={`/article/${article.name}`}>
        <h2>{article.title}</h2>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);
export default ArticleList;
