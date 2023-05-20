import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addPost(post) {
    setNotes((prevNotes) => {
      return [...prevNotes, post];
    });
  }

  function deletePost(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleAdd={addPost} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          handleDelete={deletePost}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
