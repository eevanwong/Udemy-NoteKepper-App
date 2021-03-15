import React, { strictMode } from "react";
import reactDOM from "react-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";
import notes from "../notes";

function App() {
  return (
    <strictMode>
      <Header />
      {notes.map((note, i) => {
        return <Note key={i} title={note.title} desc={note.content} />;
      })}
      <Footer />
    </strictMode>
  );
}

export default App;
