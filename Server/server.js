// Server/index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/edUnityDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Routes
const authRoutes = require('./routes/authRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const mentorshipRoutes = require('./routes/mentorshipRoutes');
const anxietyRoutes = require('./routes/anxietyRoutes');
const doubtRoutes = require('./routes/doubtRoutes');

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/discussion', discussionRoutes);
app.use('/api/mentorship', mentorshipRoutes);
app.use('/api/anxiety', anxietyRoutes);
app.use('/api/doubt', doubtRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
