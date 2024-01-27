// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: {
    type: String,
    enum: ['school', 'college', 'professional'],
    required: true,
  },
  // Fields specific to each category
  schoolDetails: {
    name: { type: String,required: true},
    stream: { type: String,required: true},
    class: { type: Number,required: true},
  },
  collegeDetails: {
    name: { type: String,required: true},
    graduationCourse:{ type: String,required: true},
    specialization: { type: String,required: true},
    university: { type: String,required: true},
    collegeYear: { type: Number,required: true},
  },
  professionalDetails: {
    name: { type: String,required: true},
    highestEducation: { type: String,required: true},
    profession: { type: String,required: true},
    currentUniversity: { type: String},
  },
  // Common fields
  credits: { type: Number, default: 100 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;