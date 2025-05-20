const Contact = require('../models/contactsModel');

// Get all Contacts 
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
        res.status(500).json({ error: "Failed to fetch contacts"});
    }
};

// ✅ Get a single contact by ID
const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        console.error("Error retrieving contact:", error.message);
        res.status(500).json({ error: "Error retrieving contact" });
    }
};

// ✅ Add a new contact
const addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        console.error("Error saving contact:", error.message);
        res.status(500).json({ error: "Error saving contact" });
    }
};

module.exports = {
    getContacts,
    getContactById,
    addContact
};
