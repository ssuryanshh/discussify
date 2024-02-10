// models/doubt.js

const mongoose = require('mongoose');

const clarityhubSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
  answers: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      content: { type: String, required: true },
      timestamp:{
        type: Date,
        default: Date.now,
      }
    },
  ],
});

const ClarityHub = mongoose.model('ClarityHub', clarityhubSchema);

module.exports = ClarityHub;
