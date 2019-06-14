var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (burgers) {
        res.send(burgers);
    })
});



router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, req.body.devoured, function (burger) {
        res.send(burger)
    })
});



router.put("/api/burgers/", function (req, res) {
    burger.update(req.body.burger_name, req.body.devoured, function (burger) {
        res.send(burger)
    })
});


router.delete("/api/burgers/", function (req, res) {
    burger.delete(req.body.burger_name, req.body.devoured, function (burger) {
        res.send(burger)
    })
});

// Export routes for server.js to use.
module.exports = router;