import { useState } from "react";
import { getComments, postComment } from "../api";
import { useContext } from "react";
import { UserContext } from "./contexts/User";

const AddComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [needTextMessage, setNeedTextMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!newComment) {
      setNeedTextMessage("Can't post a blank comment!");
    } else if (!user.username) {
      setNeedTextMessage("Must be logged in to post a new comment");
    } else {
      setIsLoading(true);
      setNeedTextMessage("");
      setComments((currentComments) => {
        return [
          {
            author: user.username,
            body: newComment,
            created_at: new Date(),
            votes: 0,
            comment_id: Date.now(),
            posting: true,
          },
          ...currentComments,
        ];
      });
      setIsError(false);
      postComment(article_id, user.username, newComment)
        .then(() => {
          setIsLoading(false);
          setNewComment("");
          getComments(article_id).then(({ data }) => {
            setComments(data.comments);
          });
        })
        .catch(({ message }) => {
          setIsError(message);
        });
    }
  };
  if (isError) {
    return <p>Error: {isError}</p>;
  }
  if (isLoading) {
    return <p>Posting comment: {newComment}</p>;
  }
  return (
    <form>
      <label>
        Add Comment:
        <input
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
      </label>
      <button onClick={handleCommentSubmit}>Submit</button>
      <p>{needTextMessage}</p>
    </form>
  );
};

export default AddComment;
