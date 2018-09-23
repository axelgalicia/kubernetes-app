"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, name, role, yearsOfExperience, onContract) {
        this.username = username;
        this.name = name;
        this.role = role;
        this.yearsOfExperience = yearsOfExperience;
        this.onContract = onContract;
        this.username = this.username.toLowerCase();
        this.onContract = this.onContract == undefined ? false : this.onContract;
    }
    User.toJson = function (user) {
        return new User(user.username, user.name, user.role, user.yearsOfExperience, user.onContract == 0 ? false : true);
    };
    return User;
}());
exports.User = User;
