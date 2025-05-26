const Contact = require('../models/contactsModel');

// VER TODOS LOS CONTACTOS : Get all Contacts 
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find(); // busca todos en la base de datos
        res.status(200).json(contacts); // devuelve la lista
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
        res.status(500).json({ error: "Failed to fetch contacts"});
    }
};

// ✅ VER UN SOLO CONATCTO : Get a single contact by ID
const getContactById = async (req, res) => {
    try {  // busca por ID
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" }); // si no lo encuentra, devuelve error 404
        }
        res.status(200).json(contact);
    } catch (error) {
        console.error("Error retrieving contact:", error.message);
        res.status(500).json({ error: "Error retrieving contact" }); // si hay un error, devuelve error 500
    }
};

// ✅ AGREGA UN NUEVO CONTACTO: Add a new contact
const addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body); // crea un nuevo contacto con los datos del cuerpo de la solicitud
        const savedContact = await newContact.save(); // guarda el contacto en la base de datos
        res.status(201).json(savedContact); // devuelve el contacto guardado con estado 201
    } catch (error) {
        console.error("Error saving contact:", error.message);
        res.status(500).json({ error: "Error saving contact" });
    }
};

 //✖️DELETE UN CONTACTO: Delete a contact by ID
 const deleteContact = async (req, res) => {
    try{
        //busco el contacto por ID y lo elimina
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ error: "Contact not found" }); // si no lo encuentra, devuelve error 404
        }
        //Si lo elimina correctamengte, respondera con status 204 (no content)
        res.status(204).json({ message: "Contact deleted successfully" });
   
    } catch (error) {
        console.error("Error deleting contact:", error.message);
        res.status(500).json({ error: "Error deleting contact" }); // si hay un error, devuelve error 500
    }
 };

module.exports = {
    getContacts,
    getContactById,
    addContact, 
    deleteContact
};
