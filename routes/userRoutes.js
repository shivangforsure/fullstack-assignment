const express = require('express');
const { createUser, getUsers, getUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Create User
router.post('/users', createUser);

// Get All Users
router.get('/users', getUsers);

// Get Single User by ID
router.get('/users/:id', getUser);

// Update User by ID
router.put('/users/:id', updateUser);

// Delete User by ID
router.delete('/users/:id', deleteUser);

// User Login
router.post('/users/login', loginUser);

module.exports = router;
