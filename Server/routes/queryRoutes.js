

const express = require('express');
const router = express.Router();
const Query = require('../models/query');

// Route to handle the creation of a new query
router.post('/create', async (req, res) => {
  try {
    // Create a new query
    const newQuery = new Query({
      email: req.body.email,
      text: req.body.text,
    });

    // Save the query to the database
    await newQuery.save();

    // Respond with success message
    res.status(201).json({ message: 'Query created successfully', query: newQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
