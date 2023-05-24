const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");

// ... (existing routes)

// Get notes by date
router.get("/api/notes/date/:date", async (req, res) => {
  try {
    const { date } = req.params;
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    const notes = await Note.find({
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    res.json(notes);
  } catch (error) {
    console.error("Error retrieving notes by date", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update note color
router.put("/api/notes/:id/color", async (req, res) => {
  try {
    const { id } = req.params;
    const { color } = req.body;

    const note = await Note.findByIdAndUpdate(id, { color }, { new: true });

    res.json(note);
  } catch (error) {
    console.error("Error updating note color", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
