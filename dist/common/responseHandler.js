"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorType_1 = require("./errorType");
var genericResponse_1 = require("./genericResponse");
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(response) {
        this.response = response;
    }
    ResponseHandler.successfulContent = function (res, content) {
        res.status(200).send(new genericResponse_1.GenericResponse(true, content));
    };
    ResponseHandler.successfulNoContent = function (res, content) {
        res.status(204).send(new genericResponse_1.GenericResponse(true));
    };
    ResponseHandler.errorInvalidRequest = function (res, content, errors) {
        res.status(400).send(new genericResponse_1.GenericResponse(false, content, errorType_1.ErrorType.INVALID_REQUEST, errorType_1.ErrorType.INVALID_REQUEST, errors));
    };
    ResponseHandler.errorNotFound = function (res, content, errorMessage) {
        res.status(404).send(new genericResponse_1.GenericResponse(false, content, errorMessage ? errorMessage : errorType_1.ErrorType.NOT_FOUND, errorType_1.ErrorType.NOT_FOUND));
    };
    ResponseHandler.serverError = function (res, err) {
        res.status(500).send(new genericResponse_1.GenericResponse(false, null, errorType_1.ErrorType.SERVER_ERROR, errorType_1.ErrorType.SERVER_ERROR, err));
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
