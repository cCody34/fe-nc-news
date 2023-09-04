import { useState } from "react";

const CommentCard = ({ comment }) => {
  const { article_id, author, body, comment_id, created_at, votes } = comment;
  const date = new Date(created_at);
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
