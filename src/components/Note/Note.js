import React from "react";

const Note = ({ note, onDelete }) => {
  const noteStyle = {
    backgroundColor: note.color,
  };

  return (
    <li style={noteStyle}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </li>
  );
};

export default Note;
