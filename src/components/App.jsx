import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.
function App() {
  const [notes, setNotes] = useState([]);

  function addPost(post) {
    setNotes((prevNotes) => {
      return [...prevNotes, post];
    });
  }

  //2. Implement the delete note functionality.
  //- Callback from the Note component to trigger a delete function.
  //- Use the filter function to filter out the item that needs deletion.
  //- Pass a id over to the Note component, pass it back to the App when deleting.
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
