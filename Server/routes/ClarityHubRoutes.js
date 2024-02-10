// routes/doubtRoutes.js

const express = require('express');
const router = express.Router();
const ClarityHub = require ('../models/ClarityHub');

router.post('/postQuestion', async (req, res) => {
  const { question } = req.body;
  try {
    const newQuestion = new ClarityHub({
      username: 'suryansh', // Static username for now
      question,
    });

    await newQuestion.save();

    res.status(201).json({ message: 'Question posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all questions
router.get('/getQuestions', async (req, res) => {
  try {
    const questions = await ClarityHub.find().sort({ timestamp: -1 });

    res.status(200).json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get question details
router.get('/getQuestionDetails/:questionId', async (req, res) => {
  const { questionId } = req.params;

  try {
    const questionDetails = await ClarityHub.findById(questionId);
    if (!questionDetails) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const answers = questionDetails.answers;

    res.status(200).json({ question: { question: questionDetails.question, username: questionDetails.username }, answers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to post an answer
router.post('/postAnswer/:questionId', async (req, res) => {
  const { questionId } = req.params;
  const { answer } = req.body;

  try {
    const question = await ClarityHub.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    // Assuming you have a user authentication system and you get the user ID from the authenticated user
    const userId = 'USER_ID'; // Replace with your actual user ID

    // Add the new answer to the question's answers array
    question.answers.push({ user: userId, content: answer });

    await question.save();

    res.status(201).json({ message: 'Answer posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;