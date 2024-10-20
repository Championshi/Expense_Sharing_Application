const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, mobile } = req.body;
  try {
    const user = new User({ name, email, mobile });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Retrieve all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};
