import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ArticleListPage from "../pages/ArticleListPage";
import ArticlePage from "../pages/ArticlePage";
import { history } from "../store/store";
import BlogNavbar from "../BlogNavbar";

const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <BlogNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticleListPage} />
        <Route path="/article/:name" component={ArticlePage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
