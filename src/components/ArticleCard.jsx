import { getArticleById, patchArticleVotes } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";

const ArticleCard = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data);
        setArticleVotes(data.votes);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, []);

  const { article_img_url, comment_count, title, topic } = article;

  const changeVotes = (increment) => {
    setArticleVotes((currentVotes) => currentVotes + increment);
    patchArticleVotes(article_id, increment)
      .then(() => {
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);
      });
  };

  if (isError) {
    if (isError.response.data.msg) {
      return (
        <Error
          errCode={isError.response.status}
          errMsg={isError.response.data.msg}
        />
      );
    } else {
      return (
        <Error errCode={isError.response.status} errMsg={isError.message} />
      );
    }
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <section className="article-card">
      <section className="article-card-votes">
        <button
          onClick={() => {
            changeVotes(1);
          }}
        >
          ⬆
        </button>
        <p>{articleVotes} votes</p>
        <button
          onClick={() => {
            changeVotes(-1);
          }}
        >
          ⬇
        </button>
      </section>
      <h3 className="article-card-title">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <Link to={`/articles/${article_id}`}>
        <img className="article-card-img" src={`${article_img_url}`}></img>
      </Link>
      <section className="article-card-info">
        <p className="article-card-comment-count">Comments: {comment_count}</p>
        <p className="article-card-topic">Topic: {topic}</p>
      </section>
    </section>
  );
};

export default ArticleCard;
