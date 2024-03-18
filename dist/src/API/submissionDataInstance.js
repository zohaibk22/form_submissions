"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionDataInstance = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv").config();
exports.submissionDataInstance = axios_1.default.create({
    baseURL: process.env.FORM_URL,
    headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
});
