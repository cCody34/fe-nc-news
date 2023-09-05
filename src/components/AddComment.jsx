import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [needTextMessage, setNeedTextMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!newComment) {
      setNeedTextMessage("Can't post a blank comment!");
    } else {
      setIsLoading(true);
      setNeedTextMessage("");
      setComments((currentComments) => {
        return [
          ...currentComments,
          {
            author: "icellusedkars",
            body: newComment,
            created_at: new Date(),
            votes: 0,
            comment_id: Date.now(),
          },
        ];
      });
      setIsError(false);
      postComment(article_id, "icellusedkars", newComment)
        .then(() => {
          setIsLoading(false);
          setNewComment("");
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
