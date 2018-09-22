"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validatorReponse_1 = require("../../common/validatorReponse");
var validatorError_1 = require("../../common/validatorError");
var UserValidator = /** @class */ (function () {
    function UserValidator() {
    }
    UserValidator.validate = function (user) {
        var validator = new validatorReponse_1.ValidatorResponse(true, []);
        // Empty Values
        if (!user) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('user'));
        }
        if (!user.username) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('username'));
        }
        if (!user.name) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('name'));
        }
        if (!user.role) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('role'));
        }
        if (!user.yearsOfExperience) {
            validator.addError(validatorError_1.ValidatorError.emptyFieldError('yearsOfExperience'));
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
