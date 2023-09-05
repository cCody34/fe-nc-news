import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, patchArticleVotes } from "../../api";
import CommentList from "../CommentList";
import AddComment from "../AddComment";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setSingleArticle(data);
        setArticleVotes(data.votes);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(({ message }) => {
        setIsError(message);
      });
  }, []);

  const {
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    title,
    topic,
  } = singleArticle;
  const date = new Date(created_at);

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const changeVotes = (increment) => {
    patchArticleVotes(article_id, increment)
      .then(({ data }) => {
        setArticleVotes(data.votes);
        setSingleArticle(data);
        setIsError(false);
      })
      .catch(({ message }) => {
        setIsError(message);
      });
  };

  return (
    <section className="single-article">
      <h2 id="single-article-title">{title}</h2>
      <section className="article-info">
        <section className="article-info-text">
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>
            Number of <a href="#article-comments">comments</a>: {comment_count}
          </p>
          {created_at ? (
            <p>Article date: {date.toLocaleDateString("en-GB")}</p>
          ) : (
            <></>
          )}
        </section>
        <section className="single-article-votes">
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
      </section>
      <img className="single-article-img" src={`${article_img_url}`}></img>
      <p>{body}</p>
      <section className="single-article-comments-section">
        <h3 id="article-comments">Article Comments</h3>
        <CommentList article_id={article_id} />
        <AddComment />
      </section>
    </section>
  );
};

export default SingleArticle;
