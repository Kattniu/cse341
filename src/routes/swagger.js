//creo otra "libreta" de ruta para este archivo 
const router = require("express").Router();
const swaggerUi = require("swagger-ui-express"); // importo el paquete que sirve para mostrar la docu en una pagina web bonita(swagger UI)
const swaggerDocument = require("../../swagger.json"); //Trae el archivo swagger.json donde esta toda la info/docu de la API 

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//cuando alguien entre a esta ruta (que en el server sera /api-docs)mjuestar la docu usando swagger ui y el archivo swagger.json 


module.exports = router;