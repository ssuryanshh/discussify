// routes/doubtRoutes.js

const express = require('express');
const router = express.Router();

// Import the Doubt model and any other necessary modules
const Doubt = require('../models/ClarityHub');

// Route to get all doubts with usernames
router.get('/doubts', async (req, res) => {
  try {
    const doubts = await Doubt.find().populate('user', 'username');
    res.json(doubts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get doubts by category (e.g., school, college, professional) with usernames
router.get('/doubts/:category', async (req, res) => {
  const category = req.params.category.toLowerCase();

  try {
    const doubts = await Doubt.find({ category }).populate('user', 'username');
    res.json(doubts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new doubt with username
router.post('/ask-doubt', async (req, res) => {
  try {
    const { userId, category, question } = req.body;

    const newDoubt = new Doubt({
      user: userId,
      category,
      question,
    });

    const savedDoubt = await newDoubt.save();

    // Populate the user field to get the username
    const doubtWithUsername = await Doubt.populate(savedDoubt, 'user', 'username');

    res.status(201).json(doubtWithUsername);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to answer a doubt with username
router.post('/answer-doubt/:id', async (req, res) => {
  const doubtId = req.params.id;

  try {
    const { userId, answer } = req.body;

    const doubt = await Doubt.findById(doubtId);

    if (!doubt) {
      return res.status(404).json({ error: 'Doubt not found' });
    }

    // Add logic to check if the user is allowed to answer the doubt based on categories

    doubt.answers.push({ user: userId, answer });
    const savedDoubt = await doubt.save();

    // Populate the user field to get the username
    const doubtWithUsername = await Doubt.populate(savedDoubt, 'answers.user', 'username');

    res.json(doubtWithUsername);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to select the best answer and award credits
router.patch('/select-best-answer/:doubtId/:answerId', async (req, res) => {
    const doubtId = req.params.doubtId;
    const answerId = req.params.answerId;
  
    try {
      const doubt = await Doubt.findById(doubtId);
  
      if (!doubt) {
        return res.status(404).json({ error: 'Doubt not found' });
      }
  
      const selectedAnswer = doubt.answers.find(answer => answer._id.toString() === answerId);
  
      if (!selectedAnswer) {
        return res.status(404).json({ error: 'Answer not found' });
      }
  
      // Check if the user selecting the best answer is the one who asked the doubt
      if (doubt.user.toString() !== req.body.userId) {
        return res.status(403).json({ error: 'Permission denied' });
      }
  
      // Award bonus credits to the best answer user (20 credits)
      const bestAnswerUser = selectedAnswer.user;
      bestAnswerUser.credits += 20;
  
      // Award bonus credits to all other users who answered (5 credits each)
      doubt.answers.forEach(answer => {
        if (answer._id.toString() !== answerId) {
          answer.user.credits += 5;
        }
      });
  
      // Save changes to the database
      await bestAnswerUser.save();
      await Promise.all(doubt.answers.map(answer => answer.user.save()));
  
      res.json({ message: 'Best answer selected and credits awarded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
    
  module.exports = router;
  