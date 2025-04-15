const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); // ✅ Import middleware

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Protected route to get logged-in user
router.get('/me', protect, async (req, res) => {
  res.status(200).json(req.user); // Returns logged-in user (without password)
});

module.exports = router;
