// models/doubt.js

const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  category: { type: String, enum: ['school', 'college', 'professional'], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: String, required: true },
  answers: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      content: { type: String, required: true },
      selectedBestAnswer: { type: Boolean, default: false }, // Added selectedBestAnswer field
    },
  ],
});

const Doubt = mongoose.model('Doubt', doubtSchema);

module.exports = Doubt;
