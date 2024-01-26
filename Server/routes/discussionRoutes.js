// routes/discussionRoutes.js

const express = require('express');
const router = express.Router();

// Import the Discussion model and any other necessary modules
const Discussion = require('../models/discussion');

// Route to get all discussions with usernames
router.get('/discussions', async (req, res) => {
  try {
    const discussions = await Discussion.find().populate('user', 'username');
    res.json(discussions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get discussions by category (e.g., school, college, professional) with usernames
router.get('/discussions/:category', async (req, res) => {
  const category = req.params.category.toLowerCase();

  try {
    const discussions = await Discussion.find({ category }).populate('user', 'username');
    res.json(discussions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new discussion with username
router.post('/create-discussion', async (req, res) => {
  try {
    const { userId, category, title, content } = req.body;

    const newDiscussion = new Discussion({
      user: userId,
      category,
      title,
      content,
    });

    const savedDiscussion = await newDiscussion.save();

    // Populate the user field to get the username
    const discussionWithUsername = await Discussion.populate(savedDiscussion, 'user', 'username');

    res.status(201).json(discussionWithUsername);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get discussion by ID with username
router.get('/discussion/:id', async (req, res) => {
  const discussionId = req.params.id;

  try {
    const discussion = await Discussion.findById(discussionId).populate('user', 'username');
    res.json(discussion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
