

// Server/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URL;
mongoose.connect(uri);

// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Routes
const authRoutes = require('./routes/userRoutes');
const talkSphereRoutes = require('./routes/TalkSphereRoutes');
const mentorshipRoutes = require('./routes/mentorshipRoutes');
const anxietyRoutes = require('./routes/anxietysessionRoutes');
const clarityHubRoutes = require('./routes/ClarityHubRoutes');
const queryRoutes = require('./routes/queryRoutes')

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/talksphere', talkSphereRoutes);
app.use('/api/mentorship', mentorshipRoutes);
app.use('/api/anxiety', anxietyRoutes);
app.use('/api/clarityhub', clarityHubRoutes);
app.use('/api/query', queryRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

