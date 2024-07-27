const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/auth');

// Register a new user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

// Get all users
router.get('/getAllUsers', userController.getAllUsers);

// Get user by ID
router.get('/getUserById:id', userController.getUserById);

// Get current logged-in user
router.get('/getCurrentUser', authenticate, userController.getCurrentUser);

// Update user
router.put('/updateUser:id', userController.updateUser);

// Delete user
router.delete('/deleteUser:id', userController.deleteUser);

module.exports = router;
