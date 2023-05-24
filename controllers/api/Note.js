const Note = require("../models/Note");

// ... (existing controller methods)

// Get notes by date
exports.getNotesByDate = async (req, res) => {
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
};

exports.updateNoteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { color } = req.body;

    const note = await Note.findByIdAndUpdate(id, { color }, { new: true });

    res.json(note);
  } catch (error) {
    console.error("Error");
  }
};
