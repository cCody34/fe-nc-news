import { getArticleById } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data);
        console.log(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(({ message }) => {
        setIsError(message);
      });
  }, []);

  const {
    article_img_url,
    comment_count,
    title,
    topic,
    votes,
  } = article;

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <section className="article-card">
      <section className="article-card-votes">
        <button>⬆</button>
        <p>{votes} votes</p>
        <button>⬇</button>
      </section>
      <h3 className="article-card-title">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <img className="article-card-img" src={`${article_img_url}`}></img>
      <section className="article-card-info">
        <p className="article-card-comment-count">Comments: {comment_count}</p>
        <p className="article-card-topic">Topic: {topic}</p>
      </section>
    </section>
  );
};

export default ArticleCard;
