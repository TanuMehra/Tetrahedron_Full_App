const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: false,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: false,
        trim: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);