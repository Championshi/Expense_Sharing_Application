const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/userController');

// POST /users: Create a new user
router.post('/', createUser);

// GET /users: Retrieve all users
router.get('/', getAllUsers);

module.exports = router;
