import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../../api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setSingleArticle(data);
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
    votes,
  } = singleArticle;
  const date = new Date(created_at);

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h2>{title}</h2>
      <section className="article-info">
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
        <section className="single-article-votes">
          <button>⬆</button>
          <p>{votes} votes</p>
          <button>⬇</button>
        </section>
      </section>
      <img src={`${article_img_url}`}></img>
      <p>{body}</p>
      <section>
        <h3 id="article-comments">Article Comments</h3>
      </section>
    </>
  );
};

export default SingleArticle;
