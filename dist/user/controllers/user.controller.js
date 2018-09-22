"use strict";
/*
    User Controller
*/
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../domain/user");
var user_queries_1 = require("../cqrs/user.queries");
var responseHandler_1 = require("../../common/responseHandler");
var user_validator_1 = require("../validators/user.validator");
var user_commands_1 = require("../cqrs/user.commands");
var router = express_1.Router();
// [GET user/]
router.get('/', function (req, res) {
    user_queries_1.UserQueries.getAllUsers().then(function (users) {
        if (users.length < 1) {
            responseHandler_1.ResponseHandler.successfulNoContent(res, []);
        }
        else {
            responseHandler_1.ResponseHandler.successfulContent(res, users);
        }
    }).catch(function (err) {
        responseHandler_1.ResponseHandler.serverError(res, err);
    });
});
// [GET user/:username]
router.get('/:username', function (req, res) {
    var username = req.params.username;
    user_queries_1.UserQueries.getUserByUsername(username).then(function (user) {
        if (!!user) {
            responseHandler_1.ResponseHandler.successfulContent(res, user);
        }
        else {
            responseHandler_1.ResponseHandler.errorNotFound(res, {}, 'username not found');
        }
    }).catch(function (err) {
        responseHandler_1.ResponseHandler.serverError(res, err);
    });
});
// [POST /user] { User }
router.post('/', function (req, res) {
    var _a = req.body, username = _a.username, name = _a.name, role = _a.role, yearsOfExperience = _a.yearsOfExperience, onContract = _a.onContract;
    var user = new user_1.User(username, name, role, yearsOfExperience, onContract);
    var validator = user_validator_1.UserValidator.validate(user);
    if (validator.success) {
        console.log("Registering user: " + username);
        user_commands_1.UserCommands.create(user).then(function (result) {
            responseHandler_1.ResponseHandler.successfulNoContent(res, {});
        }).catch(function (err) {
            responseHandler_1.ResponseHandler.serverError(res, err);
        });
    }
    else {
        responseHandler_1.ResponseHandler.errorInvalidRequest(res, user, validator.errors);
    }
});
exports.UserController = router;
