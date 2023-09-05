import { getComments } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const CommentList = ({ article_id, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(({ message }) => {
        setIsError(message);
      });
  }, []);

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (isLoading) {
    return <p>Loading comments ...</p>;
  }

  return (
    <>
      <AddComment setComments={setComments} article_id={article_id} />
      <section className="comment-list">
        {comments.map((comment) => {
          const { comment_id } = comment;
          return <CommentCard key={comment_id} comment={comment} />;
        })}
      </section>
    </>
  );
};

export default CommentList;
