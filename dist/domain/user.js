"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, name, role, yearsOfExperience, onContract) {
        this.username = username;
        this.name = name;
        this.role = role;
        this.yearsOfExperience = yearsOfExperience;
        this.onContract = onContract;
    }
    return User;
}());
exports.User = User;
