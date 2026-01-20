const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

const upload = require('multer')();

router.post('/register', upload.none(), registerUser);
router.post('/login', upload.none(), loginUser);

module.exports = router;
