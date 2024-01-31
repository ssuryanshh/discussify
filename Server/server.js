// Server/index.js

const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Parse incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ssuryansshh:edUnity.Grow@edunity.e7tuhup.mongodb.net/?retryWrites=true&w=majority');

// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Routes
const authRoutes = require('./routes/userRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const mentorshipRoutes = require('./routes/mentorshipRoutes');
const anxietyRoutes = require('./routes/anxietysessionRoutes');
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
