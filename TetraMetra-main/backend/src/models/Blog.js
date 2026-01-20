const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
    },
    // storing createdBy user ID is good practice even if just string author name is requested
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
