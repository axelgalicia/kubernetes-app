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
var users_1 = require("./controllers/users");
var home_1 = require("./controllers/home");
//Utils
var message_1 = require("./message");
var app = express_1.default();
var port = process.env.PORT || '3000';
//Parsers
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Routers
app.use('/', home_1.HomeController);
app.use('/user', users_1.UserController);
app.listen(port, function () {
    console.log(message_1.message);
    console.log("Listening at http://localhost:" + port + "/");
});
