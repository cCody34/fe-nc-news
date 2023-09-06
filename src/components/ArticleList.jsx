import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const ArticleList = ({ limit, topic, sort_by, order }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort_by, order)
      .then(({ data }) => {
        const { articles } = data;
        setArticles(articles);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(({ message }) => {
        setIsError(message);
      });
  }, [topic, sort_by, order]);

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const showAllArticles = (articles) => {
    return articles.map((article) => {
      return (
        <ArticleCard key={article.article_id} article_id={article.article_id} />
      );
    });
  };

  const showSomeArticles = (articles, limit) => {
    const someArticles = articles.map((article) => {
      return (
        <ArticleCard key={article.article_id} article_id={article.article_id} />
      );
    });
    return someArticles.slice(0, limit);
  };

  return (
    <section className="article-list">
      {limit ? showSomeArticles(articles, limit) : showAllArticles(articles)}
    </section>
  );
};

export default ArticleList;
