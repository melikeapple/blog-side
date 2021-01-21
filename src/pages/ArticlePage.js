import React from "react";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";
import articleContent from "../dummyData/article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h2>{article.title}</h2>
      {article.content.map((parag, key) => (
        <p key={key}> {parag} </p>
      ))}
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
};
export default ArticlePage;
