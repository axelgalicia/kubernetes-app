"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorResponse = /** @class */ (function () {
    function ValidatorResponse(success, errors) {
        this.success = success;
        this.errors = errors;
    }
    ValidatorResponse.prototype.addError = function (error) {
        this.success = false;
        this.errors.push(error);
    };
    return ValidatorResponse;
}());
exports.ValidatorResponse = ValidatorResponse;
