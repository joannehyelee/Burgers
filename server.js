// ***************************************************
// INITIAL STARTING POINT FOR THE NODE/EXPRESS SERVER
// ***************************************************

// DEPENDENCIES
// ===================================================
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const EXPHBS = require("express-handlebars");

// EXPRESS CONFIGURATION
// ===================================================
const PORT = process.env.PORT | 8000;

const APP = EXPRESS();

// Middleware to handle data parsing
APP.use(EXPRESS.static("public"));
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

// Handlebars
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

// ROUTER
// ===================================================
const ROUTES = require("./controllers/burgers_controller.js");
APP.use(ROUTES);


// LISTENER
// ===================================================
APP.listen(PORT, function(){
    console.log("LISTENING ON PORT: " + PORT);
});