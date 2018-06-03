// Import ORM to create functions that will interact with database
// ================================================================
const ORM = require("../config/orm.js");

const BURGER = {
    selectAll: function(cb) {
        ORM.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerCol, devouredCol, burgerVal, devouredVal, cb) {
        ORM.insertOne("burgers", burgerCol, devouredCol, burgerVal, devouredVal, function(res) {
            cb(res);
        });
    },
    updateOne: function(devouredCol, devouredVal, burgerCol, burgerVal, cb) {
        ORM.insertOne("burgers", devouredCol, devouredVal, burgerCol, burgerVal, function(res) {
            cb(res);
        });
    }
};

module.exports = BURGER;