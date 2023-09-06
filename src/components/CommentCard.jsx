import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./contexts/User";

const CommentCard = ({ comment, setComments }) => {
  const { article_id, author, body, comment_id, created_at, votes } = comment;
  const { user } = useContext(UserContext);
  console.log(user);

  const date = new Date(created_at);

  const deleteCommentButton = () => {
    return (
      <button
        onClick={() => {
        }}
      >
        ❌
      </button>
    );
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
        {author === user.username ? deleteCommentButton() : <></>}
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
