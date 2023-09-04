import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ data }) => {
      const { articles } = data;
      setArticles(articles);
    });
  }, []);

  return (
    <section className="articles-list">
      <h2>Articles:</h2>
      <section className="article-cards">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
      <button>More articles</button>
    </section>
  );
};

export default ArticleList;
