"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../../db");
var user_1 = require("../domain/user");
var UserQueries = /** @class */ (function () {
    function UserQueries() {
    }
    //Return all users
    UserQueries.getAllUsers = function () {
        return new Promise(function (res, rej) {
            db_1.db.exec('select username, name, role, yearsOfExperience, onContract from user')
                .then(function (rows) {
                var rowsParsed = JSON.parse(JSON.stringify(rows));
                var users = rowsParsed.map(function (user) {
                    return user_1.User.toJson(user);
                });
                res(users);
            }).catch(function (e) {
                console.log(e);
                rej([{ error: "Could not get user: " + e }]);
            });
        });
    };
    //Return user by username
    UserQueries.getUserByUsername = function (username) {
        return new Promise(function (res, rej) {
            db_1.db.exec('select username, name, role, yearsOfExperience, onContract from user where username=?', [username])
                .then(function (rows) {
                var rowsParsed = JSON.parse(JSON.stringify(rows));
                var users = rowsParsed.map(function (user) {
                    return user_1.User.toJson(user);
                });
                res(users[0]);
            }).catch(function (e) {
                console.log(e);
                rej([{ error: "Could not get user: " + e }]);
            });
        });
    };
    return UserQueries;
}());
exports.UserQueries = UserQueries;
