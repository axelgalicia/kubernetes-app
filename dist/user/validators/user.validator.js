"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validatorReponse_1 = require("../../common/validatorReponse");
var validatorError_1 = require("../../common/validatorError");
var utils_1 = require("../../common/utils");
var UserValidator = /** @class */ (function () {
    function UserValidator() {
    }
    UserValidator.validate = function (user) {
        var validator = new validatorReponse_1.ValidatorResponse(true, []);
        var username = user.username, name = user.name, role = user.role, yearsOfExperience = user.yearsOfExperience;
        // Empty Values
        if (!user) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('user'));
        }
        if (!username) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('username'));
        }
        if (!name) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('name'));
        }
        if (!role) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('role'));
        }
        if (!yearsOfExperience) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('yearsOfExperience'));
        }
        if (!validator.success) {
            return validator;
        }
        //Correct format
        if (!utils_1.Utils.isType(username, 'string')) {
            validator.addError(validatorError_1.ValidatorError.invalidValueTypeError('username', 'string'));
        }
        if (!utils_1.Utils.isType(name, 'string')) {
            validator.addError(validatorError_1.ValidatorError.invalidValueTypeError('name', 'string'));
        }
        if (!utils_1.Utils.isType(role, 'string')) {
            validator.addError(validatorError_1.ValidatorError.invalidValueTypeError('role', 'string'));
        }
        if (user.yearsOfExperience &&
            (isNaN(user.yearsOfExperience) ||
                (user.yearsOfExperience < 0 || user.yearsOfExperience > 100))) {
            validator.addError(validatorError_1.ValidatorError.invalidValueError('yearsOfExperience', 'value has to be >= 0 <= 100'));
        }
        return validator;
    };
    return UserValidator;
}());
exports.UserValidator = UserValidator;
