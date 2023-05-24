import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HexColorPicker } from "react-colorful";

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, date, color });
    setTitle("");
    setContent("");
    setDate(null);
    setColor("#000000");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <HexColorPicker color={color} onChange={(color) => setColor(color)} />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
