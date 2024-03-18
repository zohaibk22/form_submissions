"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const SubmissionRoutes_1 = require("./SubmissionRoutes");
exports.routes = express_1.default.Router();
/*
 * @swagger
 * /api/resource:
 * get:
 * summary: Get a resource
 * description: Get a specific resource by ID.
 * parameters:
 * — in: path
 * name: id
 * required: true
 * description: ID of the resource to retrieve.
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Successful response
 */
exports.routes.use(SubmissionRoutes_1.submissionRouter);
