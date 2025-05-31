
require ('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const connectDataBase = require('./src/database/connection');

const app = express();
const port = process.env.PORT || 8080;

// Conectar a la base de datos
connectDataBase();
const contactsRoute = require('./src/routes/contactsRoutes');
const apiDocsRoute = require("./src/routes/swagger");


app.use(express.json());

// CORS middleware para permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// Frontend static files
app.use(express.static('public'));

// Routes
app.use('/contacts', contactsRoute)
// Ruta para la documentación Swagger
app.use('/api-docs', apiDocsRoute);


app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});