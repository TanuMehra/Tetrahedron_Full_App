const express = require('express');
const router = express.Router();
const { createContact, getContacts, getContactById, getMonthlyStats } = require('../controllers/contactController');

router.post('/', createContact);
router.get('/', getContacts);
router.get('/stats/monthly', getMonthlyStats);
router.get('/:id', getContactById);

module.exports = router;