// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/userdetails'); // Assuming your user model is in a file named user.js

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const { email, password, category /* Add other registration fields here */ } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create a new user
    const newUser = new User({ email, password, category /* Add other registration fields here */ });
    await newUser.save();

    // You can generate and send a JWT token for authentication here if needed

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password is correct
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // You can generate and send a JWT token for authentication here if needed

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for updating user profile
router.put('/update-profile', async (req, res) => {
    try {
      const userId = req.user._id; // Assuming you use authentication middleware to get the user ID
  
      // Fetch the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update user profile fields (password, email, username)
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      if (req.body.email) {
        user.email = req.body.email;
      }
  
      if (req.body.username) {
        user.username = req.body.username;
      }
  
      // Save the updated user profile
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Route for deleting user account
router.delete('/delete-account', async (req, res) => {
    try {
      const userId = req.user._id; // Assuming you use authentication middleware to get the user ID
  
      // Fetch the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Delete the user account
      await user.remove();
  
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;
