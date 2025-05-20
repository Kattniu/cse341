const express = require('express');
const connectDataBase = require('./src/database/connection');
const app = express();
const professionalRoute = require('./src/routes/professionalRoutes');
const contactsRoute = require('./src/routes/contactsRoutes');

connectDataBase();

const port = process.env.PORT || 8080;
app.use(express.json());

// Frontend static files
app.use(express.static('public'));

// Routes
app.use('/professional', professionalRoute);
app.use('/contacts', contactsRoute)

//Iniciar servidor 
app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});