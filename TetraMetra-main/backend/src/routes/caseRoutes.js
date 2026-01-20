const express = require('express');
const router = express.Router();
const {
    getCases,
    createCase,
    getCaseById,
    updateCase,
    deleteCase,
} = require('../controllers/caseController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/')
    .get(getCases)
    .post(protect, upload.single('image'), createCase);

router.route('/:id')
    .get(getCaseById)
    .put(protect, upload.single('image'), updateCase)
    .delete(protect, deleteCase);

module.exports = router;
