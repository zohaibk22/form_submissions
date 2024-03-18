"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionRouter = void 0;
const express_1 = require("express");
const submissionData_1 = require("../Controllers/submissionData");
exports.submissionRouter = (0, express_1.Router)();
exports.submissionRouter.get("/:formId/filteredResponses", submissionData_1.submissionData);
