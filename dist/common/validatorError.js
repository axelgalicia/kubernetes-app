"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorError = /** @class */ (function () {
    function ValidatorError(field, message) {
        this.field = field;
        this.message = message;
    }
    ValidatorError.emptyFieldError = function (field) {
        return new ValidatorError(field, field + " cannot be empty");
    };
    ValidatorError.invalidValueError = function (field, validValudMessage) {
        return new ValidatorError(field, "Invalid value for " + field + ", " + validValudMessage);
    };
    ValidatorError.invalidValueTypeError = function (field, type) {
        return new ValidatorError(field, "Invalid data type for " + field + ", it should be a " + type);
    };
    return ValidatorError;
}());
exports.ValidatorError = ValidatorError;
