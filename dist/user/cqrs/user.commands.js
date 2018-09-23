"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../../db");
var user_1 = require("../domain/user");
var UserCommands = /** @class */ (function () {
    function UserCommands() {
    }
    //Create User
    UserCommands.create = function (user) {
        return new Promise(function (res, rej) {
            db_1.db.exec('INSERT into user set ?', user)
                .then(function (rows) {
                res(true);
            }).catch(function (e) {
                console.log(e);
                rej([{ error: "Could not create user: " + e }]);
            });
        });
    };
    //Update User
    UserCommands.updateByUsername = function (user) {
        return new Promise(function (res, rej) {
            var username = user.username, name = user.name, role = user.role, yearsOfExperience = user.yearsOfExperience, onContract = user.onContract;
            db_1.db.exec('UPDATE user SET name=?, role=?, yearsOfExperience=?, onContract=? where username=?', [name, role, yearsOfExperience, onContract, username])
                .then(function (rows) {
                res(true);
            }).catch(function (e) {
                console.log(e);
                rej([{ error: "Could not update user: " + e }]);
            });
        });
    };
    //Delete User
    UserCommands.deleteByUsername = function (username) {
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
    return UserCommands;
}());
exports.UserCommands = UserCommands;
