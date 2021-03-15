import React, { useState, StrictMode } from "react";
import reactDOM from "react-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";
import CreateNote from "../components/CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAdd(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function handleDelete(id) {
    console.log(id);
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateNote onAdd={handleAdd} />
      {notes.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={note.title}
            desc={note.content}
            onDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
