import React, { useState } from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";

function CreateArea(props) {
  const [post, setPost] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleAdd(post);
    setPost({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={post.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={post.content}
        />
        <button onClick={handleSubmit}>
          <AddReactionIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
