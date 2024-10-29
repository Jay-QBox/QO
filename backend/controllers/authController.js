// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password } = req.body;
  console.log('Registration request received:', { username, password }); // Log input data

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Username already exists:', username); // Log existing user check
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword); // Log hashed password

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    
    console.log('User registered successfully:', newUser); // Log successful registration
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error); // Log the error
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log('Login request received:', { username }); // Log input data

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found:', username); // Log if user is not found
      return res.status(400).json({ error: 'User data not valid' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch for user:', username); // Log if password does not match
      return res.status(400).json({ error: 'User data not valid' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful, token generated for user:', username); // Log successful login
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error); // Log the error
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

module.exports = { register, login };
