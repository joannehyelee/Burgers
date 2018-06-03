// ORM - Mapping an object to a table in relational datbase
// ================================================================

const CONNECTION = require("./connection.js");

// Methods to execute MySQL commands in the controllers
// These methods will be used to retrieve & store data in database
// ================================================================
const ORM = {
    selectAll: function (colToSearch, tableInput) {
        // SELECT burger_name FROM burgers
        const QUERYSTRING = "SELECT ?? FROM ??";
        CONNECTION.query(QUERYSTRING, [coltoSearch, tableInput], function (err, result){
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function () {
        // INSERT INTO burgers (burger_name, devoured) VALUES ("", FALSE);
    },

    updateOne: function () {
        // UPDATE burgers SET devoured = true WHERE burger_name = "";
    }
};

module.exports = ORM;