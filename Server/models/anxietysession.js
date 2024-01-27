// models/anxietySession.js

const mongoose = require('mongoose');

const anxietySessionSchema = new mongoose.Schema({
  menteeId: { type: String, required: true }, // Unique identifier for the mentee
  expertId: { type: String, required: true }, // Unique identifier for the expert
  sessionDate: { type: Date, default: Date.now },
  chatHistory: [
    {
      senderId: { type: String, required: true }, // Unique identifier for the sender (mentee or expert)
      message: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  feedback: { type: String },
});

const AnxietySession = mongoose.model('AnxietySession', anxietySessionSchema);

module.exports = AnxietySession;
