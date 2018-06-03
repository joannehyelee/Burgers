const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// Import the model (burger.js) to use its database functions
// ===========================================================
const BURGER = require("../models/burger.js");

// Create routes & set up logic within those routes
// ===========================================================
ROUTER.get("/", function (req, res) {
    BURGER.selectAll(function(data) {
        const BURGEROBJECT = {
            burgers: data
        };
        console.log(BURGEROBJECT);
        res.render("index", BURGEROBJECT);
    });
});

module.exports = ROUTER;