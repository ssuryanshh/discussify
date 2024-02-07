// routes/discussionRoutes.js

const express = require('express');
const router = express.Router();

const TalkSphere = require('../models/TalkSphere');

// Route to get the last 5 previous messages or messages for a specific username
router.get("/messages", async (req, res) => {
  const { username } = req.query;

  try {
    const talkSphere = await TalkSphere.findOne(); // Assuming there is only one TalkSphere document, adjust accordingly
    if (!talkSphere) {
      return res.status(404).json({ message: "No messages found" });
    }

    // Filter messages by username if provided
    const filteredMessages = username
      ? talkSphere.messages.filter(message => message.username === username)
      : talkSphere.messages;

    // Get the last 5 messages
    const last5Messages = filteredMessages.slice(-5);

    res.json(last5Messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to post a new message with current timestamp
router.post("/messages", async (req, res) => {
  const { text } = req.body;
  const username = "rituraj"; // Set the username to "suryansh"

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  try {
    const talkSphere = await TalkSphere.findOne(); // Assuming there is only one TalkSphere document, adjust accordingly
    if (!talkSphere) {
      return res.status(404).json({ message: "TalkSphere not found" });
    }

    const newMessage = {
      username,
      text,
      timestamp: new Date(), // Add current timestamp
    };

    talkSphere.messages.push(newMessage);
    await talkSphere.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Route to edit a specific message by ID
router.put("/messages/:id", async (req, res) => {
  const { text } = req.body;
  const messageId = req.params.id;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  try {
    const talkSphere = await TalkSphere.findOne();
    if (!talkSphere) {
      return res.status(404).json({ message: "TalkSphere not found" });
    }

    const editedMessageIndex = talkSphere.messages.findIndex(message => message._id.toString() === messageId);

    if (editedMessageIndex === -1) {
      return res.status(404).json({ message: "Message not found" });
    }

    talkSphere.messages[editedMessageIndex].text = text;
    await talkSphere.save();

    res.json(talkSphere.messages[editedMessageIndex]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to delete a specific message by ID
router.delete("/messages/:id", async (req, res) => {
  const messageId = req.params.id;

  try {
    const talkSphere = await TalkSphere.findOne();
    if (!talkSphere) {
      return res.status(404).json({ message: "TalkSphere not found" });
    }

    const deletedMessageIndex = talkSphere.messages.findIndex(message => message._id.toString() === messageId);

    if (deletedMessageIndex === -1) {
      return res.status(404).json({ message: "Message not found" });
    }

    const deletedMessage = talkSphere.messages[deletedMessageIndex];
    talkSphere.messages.splice(deletedMessageIndex, 1);
    await talkSphere.save();

    res.json(deletedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;


module.exports = router;

