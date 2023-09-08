import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
import { deleteComment } from "../api";

const CommentCard = ({ comment, setComments, setCommentCardError }) => {
  const { article_id, author, body, comment_id, created_at, votes, posting } =
    comment;
  const { user } = useContext(UserContext);

  const date = new Date(created_at);

  const handleDeleteComment = () => {
    setComments((currentComments) => {
      return currentComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    setCommentCardError(false);
    deleteComment(comment_id).catch(({ message }) => {
      setCommentCardError(message);
    });
  };

  return (
    <section className="comment-card">
      <h4 className="comment-card-body">{body}</h4>
      <section className="comment-card-info">
        <p>From {author}</p>
        {created_at ? (
          <p> Date posted: {date.toLocaleDateString("en-GB")}</p>
        ) : (
          <></>
        )}
        {author === user.username ? (
          <button onClick={handleDeleteComment}>❌</button>
        ) : (
          <></>
        )}
      </section>
      <section className="comment-card-votes">
        <button className="comment-card-votes-buttons">⬆</button>
        <p className="comment-card-votes-text">{votes} votes</p>
        <button className="comment-card-votes-buttons">⬇</button>
      </section>
    </section>
  );
};

export default CommentCard;
