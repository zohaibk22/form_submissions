"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionData = void 0;
const getSubmissionData_1 = require("../Services/getSubmissionData");
require("dotenv").config();
const submissionData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const submissionData = yield (0, getSubmissionData_1.getSubmissionData)(req);
        res.status(200).json(submissionData);
    }
    catch (error) {
        next(error);
    }
});
exports.submissionData = submissionData;
