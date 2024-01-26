// models/mentorship.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorshipSchema = new Schema({
  menteeUsername: {
    type: String,
    required: true,
  },
  mentorUsername: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'closed'],
    default: 'pending',
  },
  feedback: {
    type: String,
  },
});

const Mentorship = mongoose.model('Mentorship', mentorshipSchema);

module.exports = Mentorship;
