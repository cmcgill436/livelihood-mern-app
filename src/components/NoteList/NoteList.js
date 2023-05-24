import React from "react";
import Note from "../Note/Note";

const NoteList = ({ notes, onDelete }) => {
  return (
    <ul>
      {notes.map((note) => (
        <Note key={note._id} note={note} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default NoteList;
