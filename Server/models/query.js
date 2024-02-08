const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
    lowercase: true, // Convert to lowercase
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Email format validation
  },
  text: {
    type: String,
    required: true,
    minLength: 5, // Minimum length validation
    maxLength: 500, // Maximum length validation
  },
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
