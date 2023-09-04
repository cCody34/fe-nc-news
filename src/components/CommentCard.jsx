import { useState } from "react";

const CommentCard = ({ comment }) => {
  console.log(comment);
  const { article_id, author, body, comment_id, created_at, votes } = comment;
  const date = new Date(created_at);
  return (
    <section>
      <section>
        <h4>{body}</h4>
      </section>
      <p>From {author}</p>
      {created_at ? (
        <p> Date posted: {date.toLocaleDateString("en-GB")}</p>
      ) : (
        <></>
      )}
      <section></section>
      <section className="comment-card-votes">
        <button>⬆</button>
        <p>{votes} votes</p>
        <button>⬇</button>
      </section>
    </section>
  );
};

export default CommentCard;
