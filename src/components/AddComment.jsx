import { useState } from "react";

const AddComment = () => {
  const [newComment, setNewComment] = useState("");
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment) {
        console.log("new Comment")
    }
    console.log("no comment");
  };
  console.log(newComment);
  return (
    <form>
      <input
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></input>
      <button onClick={handleCommentSubmit}>Submit</button>
    </form>
  );
};

export default AddComment;
