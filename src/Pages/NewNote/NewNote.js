import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import NoteForm from "../../components/NoteForm/NoteForm";

const NewNote = () => {
  const [error, setError] = useState(null);

  const handleNoteSubmit = async (noteData) => {
    try {
      await axios.post("/api/notes", noteData);
      // Add any success message or additional logic if needed
    } catch (error) {
      setError("Error adding note. Please try again.");
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <NoteForm onSubmit={handleNoteSubmit} />
    </div>
  );
};

export default NewNote;
