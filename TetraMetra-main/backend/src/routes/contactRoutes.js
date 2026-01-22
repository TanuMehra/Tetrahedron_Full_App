const express = require('express');
const router = express.Router();
const { createContact, getContacts, getContactById } = require('../controllers/contactController');

router.post('/', createContact);
router.get('/', getContacts);
router.get('/:id', getContactById);

module.exports = router;