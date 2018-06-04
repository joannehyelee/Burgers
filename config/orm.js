// ORM - Mapping an object to a table in relational datbase
// ================================================================

const CONNECTION = require("./connection.js");

// Methods to execute MySQL commands in the controllers
// These methods will be used to retrieve & store data in database
// ================================================================
const ORM = {
    selectAll: function (tableInput, cb) {
        // SELECT burger_name FROM burgers
        const QUERYSTRING = "SELECT * FROM " + tableInput + ";";
        CONNECTION.query(QUERYSTRING, function (err, result){
            if (err) {
                throw err;
            }
            cb(result);
            // console.log(result);
        });
    }

    // selectAll: function (burgerCol, tableInput, cb) {
    //     // SELECT burger_name FROM burgers
    //     const QUERYSTRING = "SELECT ?? FROM ??";
    //     CONNECTION.query(QUERYSTRING, [burgerCol, tableInput], function (err, result){
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //         console.log(result);
    //     });
    // }

    // insertOne: function (tableInput, burgerCol, devouredCol, burgerVal, devouredVal) {
    //     // INSERT INTO burgers (burger_name, devoured) VALUES ("", FALSE);
    //     const QUERYSTRING = "INSERT INTO ?? (??, ??) VALUES (??, FALSE);";
    //     CONNECTION.query(QUERYSTRING, [tableInput, burgerCol, devouredCol, burgerVal, devouredVal], function (err, result){
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //         console.log(result);
    //     });
    // },

    // updateOne: function (tableInput, devouredCol, devouredVal, burgerCol, burgerVal) {
    //     // UPDATE burgers SET devoured = true WHERE burger_name = "";
    //     const QUERYSTRING = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
    //     CONNECTION.query(QUERYSTRING, [tableInput, devouredCol, devouredVal, burgerCol, burgerVal], function(err, result){
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //         console.log(result);
    //     });
    // }
};

module.exports = ORM;