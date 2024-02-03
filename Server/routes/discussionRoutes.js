// routes/discussionRoutes.js

const express = require('express');
const router = express.Router();

// Import the Discussion model and any other necessary modules
const Discussion = require('../models/discussion');

// Get messages for a specific channel
router.get("/:channel", async (req, res) => {
  const channel = req.params.channel;
  const talksphere = await TalkSphere.findOne({ channel }).populate("messages");
  if (!talksphere) {
    return res.status(404).json({ message: "TalkSphere not found" });
  }
  res.json(talksphere.messages);
});

// Post a new message to a specific channel
router.post("/:channel", async (req, res) => {
  const channel = req.params.channel;
  const { username, text } = req.body;
  const talksphere = await TalkSphere.findOne({ channel });
  if (!talksphere) {
    const newTalkSphere = new TalkSphere({ channel });
    await newTalkSphere.save();
  }
  talksphere.messages.push({ username, text, timestamp: new Date() });
  await talksphere.save();
  res.json({ username, text });
});

module.exports = router;