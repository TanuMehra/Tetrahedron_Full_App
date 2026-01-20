const Case = require('../models/Case');

// @desc    Get all cases
// @route   GET /api/cases
// @access  Public
const getCases = async (req, res) => {
    try {
        const cases = await Case.find();
        res.json(cases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a case
// @route   POST /api/cases
// @access  Private
const createCase = async (req, res) => {
    const { title, description } = req.body;

    let image = '';
    if (req.file) {
        image = req.file.path;
    }

    try {
        const newCase = new Case({
            title,
            description,
            image,
            createdBy: req.user._id
        });

        const savedCase = await newCase.save();
        res.status(201).json(savedCase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get case by ID
// @route   GET /api/cases/:id
// @access  Public
const getCaseById = async (req, res) => {
    try {
        const foundCase = await Case.findById(req.params.id);
        if (foundCase) {
            res.json(foundCase);
        } else {
            res.status(404).json({ message: 'Case not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update case
// @route   PUT /api/cases/:id
// @access  Private
const updateCase = async (req, res) => {
    try {
        const foundCase = await Case.findById(req.params.id);

        if (foundCase) {
            foundCase.title = req.body.title || foundCase.title;
            foundCase.description = req.body.description || foundCase.description;

            if (req.file) {
                foundCase.image = req.file.path;
            }

            const updatedCase = await foundCase.save();
            res.json(updatedCase);
        } else {
            res.status(404).json({ message: 'Case not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete case
// @route   DELETE /api/cases/:id
// @access  Private
const deleteCase = async (req, res) => {
    try {
        const foundCase = await Case.findById(req.params.id);

        if (foundCase) {
            await foundCase.deleteOne();
            res.json({ message: 'Case removed' });
        } else {
            res.status(404).json({ message: 'Case not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCases,
    createCase,
    getCaseById,
    updateCase,
    deleteCase,
};
