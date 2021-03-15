import React from "react";

function Note(props) {
  console.log(props);

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
