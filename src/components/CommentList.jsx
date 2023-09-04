import { getComments } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
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
  console.log(comments);

  return (
    <>
      {comments.map((comment) => {
        const { comment_id } = comment;
        return <CommentCard comment_id={comment_id} />;
      })}
    </>
  );
};

export default CommentList;
