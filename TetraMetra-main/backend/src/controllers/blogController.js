const Blog = require('../models/Blog');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private

const createBlog = async (req, res) => {
    const { title, description, date } = req.body;
    let image = '';
    console.log(req.file);
    if (req.file) {
        image = req.file.path;
    }
    try {
        const blog = new Blog({
            title,
            description,
            date: date || Date.now(),
            image,
            createdBy: req.user._id
        });

        const createdBlog = await blog.save();
        res.status(201).json(createdBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get blog by ID
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (blog) {
            blog.title = req.body.title || blog.title;
            blog.description = req.body.description || blog.description;
            blog.author = req.body.author || blog.author;
            if (req.body.date) {
                blog.date = req.body.date;
            }
            if (req.file) {
                blog.image = req.file.path;
            }

            const updatedBlog = await blog.save();
            res.json(updatedBlog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (blog) {
            await blog.deleteOne();
            res.json({ message: 'Blog removed' });
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
};
