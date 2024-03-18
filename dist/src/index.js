"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("../swagger");
const error_1 = require("./Middleware/error");
const Routes_1 = require("./Routes");
//intializing the express app
exports.app = (0, express_1.default)();
// Middlewares
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
// Routes
exports.app.get("/", (_req, res) => {
    res.send("<h1>Welcome to the Fillout Filter Form Submissions API</h1>");
});
exports.app.use("/fillout", Routes_1.routes);
exports.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// Error Handler
exports.app.use(error_1.errorHandler);
