import { getComments } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import Error from "./Error";

const CommentList = ({ article_id, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [commentCardError, setCommentCardError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, []);

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
    return <p>Loading comments ...</p>;
  }

  if (commentCardError) {
    if (commentCardError === "Request failed with status code 500") {
      return (
        <p>
          Error: Could not delete comment, please refresh page and try again
        </p>
      );
    } else {
      if (commentCardError.response.data.msg) {
        return (
          <Error
            errCode={commentCardError.response.status}
            errMsg={commentCardError.response.data.msg}
          />
        );
      } else {
        return (
          <Error
            errCode={commentCardError.response.status}
            errMsg={commentCardError.message}
          />
        );
      }
    }
  }

  return (
    <>
      <AddComment setComments={setComments} article_id={article_id} />
      <section className="comment-list">
        {comments.map((comment) => {
          const { comment_id } = comment;
          return (
            <CommentCard
              key={comment_id}
              comment={comment}
              setComments={setComments}
              setCommentCardError={setCommentCardError}
            />
          );
        })}
      </section>
    </>
  );
};

export default CommentList;
