const express = require('express');
const router = express.Router();
const {
    getBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/')
    .get(getBlogs)
    .post(protect, upload.single('image'), createBlog);

router.route('/:id')
    .get(getBlogById)
    .put(protect, upload.single('image'), updateBlog)
    .delete(protect, deleteBlog);

module.exports = router;
