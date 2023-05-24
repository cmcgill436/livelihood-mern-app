import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "../../components/NoteForm/NoteForm";
import NoteList from "../../components/NoteList/NoteList";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("/api/notes");
      setNotes(response.data);
    } catch (error) {
      setError("Error retrieving notes. Please try again.");
    }
  };

  const handleNoteSubmit = async (noteData) => {
    try {
      const response = await axios.post("/api/notes", noteData);
      setNotes([...notes, response.data]);
    } catch (error) {
      setError("Error adding note. Please try again.");
    }
  };

  const handleNoteDelete = async (noteId) => {
    try {
      await axios.delete(`/api/notes/${noteId}`);
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (error) {
      setError("Error deleting note. Please try again.");
    }
  };

  return (
    <div>
      <button>+Create</button>
      <h3>Notes</h3>
      {error && <p>{error}</p>}
      <NoteForm onSubmit={handleNoteSubmit} />
      <NoteList notes={notes} onDelete={handleNoteDelete} />
    </div>
  );
};

export default Dashboard;
