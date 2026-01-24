const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserStatsByMonth } = require('../controllers/authController');

const upload = require('multer')();

router.post('/register', upload.none(), registerUser);
router.post('/login', upload.none(), loginUser);
router.get('/stats/users-by-month', getUserStatsByMonth);

module.exports = router;
