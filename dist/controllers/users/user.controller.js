"use strict";
/*
    User Controller
*/
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../../domain/user");
var router = express_1.Router();
router.get('/', function (req, res) {
    user_1.User.getAllUsers().then(function (users) {
        res.status(200).send(users);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});
router.get('/:username', function (req, res) {
    var username = req.params.username;
    var user = new user_1.User(username, 'Axel Galicia', 'Administrator', 8, false);
    res.send(user);
});
router.put('/:username', function (req, res) {
    console.log(req.body);
    var username = req.params.username;
    var user = new user_1.User(username, 'Axel Galicia', 'Administrator', 8, false);
    res.send(user);
});
exports.UserController = router;
