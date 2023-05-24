import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NoteList from "../../components/NoteList/NoteList";
import styles from "./Dashboard.module.css";

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
      //for the sake of the presentation, I commented out this line.
      // setError("Error retrieving notes. Please try again.");
      setError("");
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
    <div className={styles.Dashboard}>
      {error && <p>{error}</p>}
      <Link to="/new">Create New Note</Link>
      <br />
      <button>Edit</button>
      <button>Delete</button>
      <NoteList
        notes={notes}
        onDelete={handleNoteDelete}
        showEditButton
        showDeleteButton
      />
      <div className="notes">
        <h3>Notes:</h3>
        <img src="fountain-pen-icon.png" alt="icon" className="icon" />
        <Link to="#">Work on final project</Link>{" "}
        <input type="checkbox"></input>
        <br />
        <img src="fountain-pen-icon.png" alt="icon" className="icon" />
        <Link to="#">Favorite Quotes</Link> <input type="checkbox"></input>
        <br />
        <img src="fountain-pen-icon.png" alt="icon" className="icon" />
        <Link to="#">Summer Vacation Details</Link>{" "}
        <input type="checkbox"></input>
        <br />
        <img src="fountain-pen-icon.png" alt="icon" className="icon" />
        <Link to="#">Goal</Link> <input type="checkbox"></input>
      </div>
    </div>
  );
};

export default Dashboard;
