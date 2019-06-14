const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (burger_name, devoured, cb) {
        orm.insertOne(burger_name, devoured, function (res) {
            cb(res);
        });
    },
    update: function (burger_name, devoured, cb) {
        orm.updateOne(burger_name, devoured, function (res) {
            cb(res);
        });
    },
    delete: function (burger_name, cb) {
        orm.deleteOne(burger_name, function (res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller (burgersController.js).
module.exports = burger;