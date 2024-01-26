// routes/anxietyRoutes.js

const express = require('express');
const router = express.Router();
const AnxietySession = require('../models/anxietysession');

// Get all anxiety sessions
router.get('/anxiety-sessions', async (req, res) => {
  try {
    const anxietySessions = await AnxietySession.find();
    res.json(anxietySessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific anxiety session by ID
router.get('/anxiety-sessions/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;

  try {
    const anxietySession = await AnxietySession.findById(sessionId);
    if (!anxietySession) {
      return res.status(404).json({ error: 'Anxiety session not found' });
    }

    res.json(anxietySession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start a new anxiety session
router.post('/anxiety-sessions', async (req, res) => {
  const { userId, description } = req.body;

  try {
    const newAnxietySession = new AnxietySession({
      user: userId,
      description,
      messages: [],
    });

    await newAnxietySession.save();

    res.json(newAnxietySession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Join an existing anxiety session
router.patch('/anxiety-sessions/join/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  const userId = req.body.userId;

  try {
    const anxietySession = await AnxietySession.findById(sessionId);
    if (!anxietySession) {
      return res.status(404).json({ error: 'Anxiety session not found' });
    }

    anxietySession.participants.push(userId);
    await anxietySession.save();

    res.json(anxietySession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Leave an anxiety session
router.patch('/anxiety-sessions/leave/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  const userId = req.body.userId;

  try {
    const anxietySession = await AnxietySession.findById(sessionId);
    if (!anxietySession) {
      return res.status(404).json({ error: 'Anxiety session not found' });
    }

    const participantIndex = anxietySession.participants.indexOf(userId);
    if (participantIndex !== -1) {
      anxietySession.participants.splice(participantIndex, 1);
    }

    await anxietySession.save();

    res.json(anxietySession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a message to an anxiety session
router.patch('/anxiety-sessions/:sessionId/add-message', async (req, res) => {
  const sessionId = req.params.sessionId;
  const { userId, message } = req.body;

  try {
    const anxietySession = await AnxietySession.findById(sessionId);
    if (!anxietySession) {
      return res.status(404).json({ error: 'Anxiety session not found' });
    }

    const newMessage = {
      user: userId,
      text: message,
    };

    anxietySession.messages.push(newMessage);
    await anxietySession.save();

    res.json(anxietySession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
