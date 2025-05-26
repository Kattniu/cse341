const express = require('express');
const router = express.Router();
const { getContacts, 
        getContactById, 
        addContact, 
        deleteContact
         } = require('../controllers/contactsController');

// Route to get all contacts
router.get('/', getContacts); //cuando alguien visita /contacts, llama a getContacts

// Route to get a single contact
router.get('/:id', getContactById);//cuando alguien visita /contacts/ID

// ✅ Route to add a contact
router.post('/', addContact);//Cuando alguien manda un POST a /contacts, llama a addContact

// ✖️ Route to delete a contact
router.delete('/:id', deleteContact); //Cuando alguien manda un DELETE a /contacts/ID, llama a deleteContact


module.exports = router; // Export the router to use in the main app
// This file defines the routes for the contacts API, linking them to the appropriate controller functions.