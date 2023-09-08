import { useState, useContext, useEffect } from "react";
import { UserContext } from "./contexts/User";
import { deleteComment, getUserByName, patchCommentVotes } from "../api";

const CommentCard = ({ comment, setComments, setCommentCardError }) => {
  const { article_id, author, body, comment_id, created_at, votes } = comment;
  const [commentVotes, setCommentVotes] = useState(votes);
  const { user } = useContext(UserContext);
  const [authorImage, SetAuthorImage] = useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw2UqvsurOih_XVDIANF9HBg&ust=1694264709045000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPC08YKKm4EDFQAAAAAdAAAAABAE"
  );

  const date = new Date(created_at);

  const handleDeleteComment = () => {
    setComments((currentComments) => {
      return currentComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    setCommentCardError(false);
    deleteComment(comment_id).catch((err) => {
      setCommentCardError(err);
    });
  };

  const changeCommentVotes = (increment) => {
    setCommentVotes((currentVotes) => currentVotes + increment);
    patchCommentVotes(comment_id, increment)
      .then(() => {
        setCommentCardError(false);
      })
      .catch((err) => {
        setCommentCardError(err);
      });
  };

  useEffect(() => {
    getUserByName(author).then(({ data }) => {
      SetAuthorImage(data.avatar_url);
    });
  }, []);

  return (
    <section className="comment-card">
      <section className="comment-card-first-line">
        <section className="comment-card-first-left">
          <div className="comment-card-avatar-background">
            <img className="comment-card-avatar" src={authorImage}></img>
          </div>
          <h4 className="comment-card-author">{author}</h4>
          <p className="comment-card-date">
            {" "}
            {date.toLocaleDateString("en-GB")}
          </p>
        </section>
        {author === user.username ? (
          <button onClick={handleDeleteComment}>❌</button>
        ) : (
          <></>
        )}
      </section>
      <p className="comment-card-body">{body}</p>
      <section className="comment-card-votes">
        <button
          className="comment-card-votes-buttons"
          onClick={() => {
            changeCommentVotes(1);
          }}
        >
          ⬆
        </button>
        <p className="comment-card-votes-text">{commentVotes}</p>
        <button
          className="comment-card-votes-buttons"
          onClick={() => {
            changeCommentVotes(-1);
          }}
        >
          ⬇
        </button>
      </section>
    </section>
  );
};

export default CommentCard;
