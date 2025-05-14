const express = require('express');
const connectDataBase = require('./src/database/connection');
const app = express();
const professionalRoute = require('./src/routes/professionalRoutes');
const contactsRoute = require('./src/routes/contactsRoutes');

connectDataBase();

const port = process.env.PORT || 8080;

// Frontend static files
app.use(express.static('public'));

// Routes to endpoints
app.use('/professional', professionalRoute);
app.use('/contacts', contactsRoute)

// Start the server
app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});