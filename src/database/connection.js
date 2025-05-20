require('dotenv').config(); // Cargar las variables de entorno desde .env
const mongoose = require('mongoose');

// Obtener la URI de la base de datos desde la variable de entorno MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

// Función para conectar a la base de datos
const connectDataBase = async () => {
    try {
        // Conectar a MongoDB usando la URI de la variable de entorno
        await mongoose.connect(MONGO_URI);
        console.log("Connected to DB:", mongoose.connection.name);
    } catch (error) {
        // Manejo de errores en caso de que la conexión falle
        console.log('MongoDB connection error:', error);
        process.exit(1); // Salir del proceso si no se pudo conectar
    }
}

// Exportar la función para ser utilizada en otros archivos
module.exports = connectDataBase;
