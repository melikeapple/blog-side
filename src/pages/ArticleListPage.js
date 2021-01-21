import React from "react";
import ArticleList from "../components/ArticleList";
import articleContent from "../dummyData/article-content";

const ArticleListPage = () => (
  <>
    <ArticleList articles={articleContent} />
  </>
);

export default ArticleListPage;
