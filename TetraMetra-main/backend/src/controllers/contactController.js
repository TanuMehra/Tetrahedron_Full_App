const Contact = require('../models/Contact');

// @desc    Create a new contact submission
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
    try {
        const { name, email, requirements, companyName, phoneNumber } = req.body;

        if (!name || !email || !requirements) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }
        const contact = await Contact.create({
            name,
            email,
            requirements,
            companyName,
            phoneNumber
        });

        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private (or Public depending on requirements, usually Admin only)
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get a single contact submission
// @route   GET /api/contact/:id
// @access  Private
const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    createContact,
    getContacts,
    getContactById
};