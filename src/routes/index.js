//crea un router nuevo para manejar las rutas de la aplicación
const router = require("express").Router();

router.use('/', require("./swagger")); //Esto es para que cuando alguien visite /api-docs, use las rutas que estan en swagger.js


//Aquie seria como decir: cuando alguien visita /contacts usa las rutas que estan en este archivo 
router.use("/contacts", require("./contactsRoutes"));

//Esto es para compartir esa libreta con otros archivos como server.js que la va a usar 
module.exports = router;