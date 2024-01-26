// routes/mentorshipRoutes.js

const express = require('express');
const router = express.Router();
const Mentorship = require('../models/mentorship');

// Route to create a new mentorship session
router.post('/create-mentorship', async (req, res) => {
  try {
    const { menteeUsername, mentorUsername, topic, description } = req.body;

    // Function to check mentor suitability based on user categories
const checkMentorSuitability = (menteeCategory, mentorCategory) => {
    // Define a mapping of allowed mentor categories for each mentee category
    const allowedMentorCategories = {
      school: ['college','professional'],
      college: ['college', 'professional'],
      professional: ['professional'],
    };
  
    // Check if the mentor's category is allowed for the given mentee category
    return allowedMentorCategories[menteeCategory]?.includes(mentorCategory) || false;
  };
  
  // Example usage
  const menteeCategory = 'school';
  const mentorCategory = 'college';
  
  const isSuitableMentor = checkMentorSuitability(menteeCategory, mentorCategory);
  
  if (isSuitableMentor) {
    console.log('Mentor is suitable for the mentee.');
  } else {
    console.log('Mentor is not suitable for the mentee.');
  }
  
    // Create a new mentorship session
    const newMentorship = new Mentorship({
      menteeUsername,
      mentorUsername,
      topic,
      description,
    });

    // Save the new mentorship session
    const savedMentorship = await newMentorship.save();

    res.status(201).json(savedMentorship);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all mentorship sessions
router.get('/mentorships', async (req, res) => {
  try {
    const mentorships = await Mentorship.find();
    res.status(200).json(mentorships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get mentorship sessions for a specific user
router.get('/mentorships/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const mentorships = await Mentorship.find({
      $or: [{ menteeUsername: username }, { mentorUsername: username }],
    });
    res.status(200).json(mentorships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to close a mentorship session and provide feedback
router.patch('/close-mentorship/:mentorshipId', async (req, res) => {
  try {
    const mentorshipId = req.params.mentorshipId;
    const feedback = req.body.feedback;

    const closedMentorship = await Mentorship.findByIdAndUpdate(
      mentorshipId,
      { $set: { status: 'closed', feedback } },
      { new: true }
    );

    res.status(200).json(closedMentorship);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
