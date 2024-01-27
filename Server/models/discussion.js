// models/discussion.js

const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  isGlobal: { type: Boolean, default: false }, // Added isGlobal flag
  category: { type: String, enum: ['school', 'college', 'professional'], required: true },
  messages: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
