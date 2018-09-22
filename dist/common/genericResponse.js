"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericResponse = /** @class */ (function () {
    function GenericResponse(sucess, content, errorMessage, errorType, errors) {
        this.sucess = sucess;
        this.content = content;
        this.errorMessage = errorMessage;
        this.errorType = errorType;
        this.errors = errors;
    }
    return GenericResponse;
}());
exports.GenericResponse = GenericResponse;
