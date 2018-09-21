"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var User = /** @class */ (function () {
    function User(username, name, role, yearsOfExperience, onContract) {
        this.username = username;
        this.name = name;
        this.role = role;
        this.yearsOfExperience = yearsOfExperience;
        this.onContract = onContract;
    }
    User.toJson = function (user) {
        var userJson = new User(user.username, user.name, user.role, user.yearsOfExperience, user.onContract);
        return userJson;
    };
    User.getAllUsers = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            db_1.db.exec('select username, name, role, yearsOfExperience, onContract from user')
                .then(function (rows) {
                var rowsParsed = JSON.parse(JSON.stringify(rows));
                var users = rowsParsed.map(function (user) {
                    return _this.toJson(user);
                });
                res(rowsParsed);
            }).catch(function (e) {
                console.log(e);
                rej([{ error: 'Could not get users' }]);
            });
        });
    };
    return User;
}());
exports.User = User;
