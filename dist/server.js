"use strict";
/*
    SERVER
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
//Controllers
var controllers_1 = require("./user/controllers");
var controllers_2 = require("./home/controllers");
//Utils
var message_1 = require("./message");
//Middleware
var logger_middleware_1 = require("./middlewares/logger.middleware");
var app = express_1.default();
var port = process.env.PORT || '4000';
//Parsers
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Middleware
app.use(logger_middleware_1.logger);
//Routers
app.use('/', controllers_2.HomeController);
app.use('/user', controllers_1.UserController);
app.listen(port, function () {
    console.log(message_1.message);
    console.log("Listening at http://localhost:" + port + "/");
});
