import { useState } from "react";

const AddComment = () => {
  const [newComment, setNewComment] = useState("");
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment) {
      console.log("new Comment");

      setNewComment("");
    } else {
      console.log("no comment");
    }
  };
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
    </form>
  );
};

export default AddComment;
