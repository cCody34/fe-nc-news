import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, patchArticleVotes } from "../../api";
import CommentList from "../CommentList";
import Error from "../Error";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setSingleArticle(data);
        setArticleVotes(data.votes);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);
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

  const changeVotes = (increment) => {
    setArticleVotes((currentVotes) => currentVotes + increment);
    patchArticleVotes(article_id, increment)
      .then(() => {
        setIsError(false);
      })
      .catch(({ message }) => {
        setIsError(message);
      });
  };

  return (
    <section className="single-article">
      <h2 id="single-article-title">{title}</h2>
      <section className="single-article-info">
        <section className="single-article-info-text">
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>
            Number of <a href="#single-article-comments">comments</a>:{" "}
            {comment_count}
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
        <h3 id="single-article-comments">Article Comments</h3>
        <CommentList
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
      </section>
    </section>
  );
};

export default SingleArticle;
