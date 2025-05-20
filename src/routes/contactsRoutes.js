const express = require('express');
const router = express.Router();
const { getContacts, 
        getContactById, 
        addContact } = require('../controllers/contactsController');

// Route to get all contacts
router.get('/', getContacts);

// Route to get a single contact
router.get('/:id', getContactById);

// ✅ Route to add a contact
router.post('/', addContact);

module.exports = router;