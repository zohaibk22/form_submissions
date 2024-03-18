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
exports.getSubmissionData = void 0;
const submissionDataInstance_1 = require("../API/submissionDataInstance");
const filterSubmissionResponses_1 = require("../Utils/filterSubmissionResponses");
const updateResponseObject_1 = require("../Utils/updateResponseObject");
const getSubmissionData = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formId } = req.params;
        const { filters } = (req === null || req === void 0 ? void 0 : req.body) || {};
        const submissionDataFromFillOut = yield submissionDataInstance_1.submissionDataInstance.get(`/v1/api/forms/${formId}/submissions`, { params: req.query });
        const { data } = submissionDataFromFillOut || {};
        const filteredSubmissions = (0, filterSubmissionResponses_1.filterSubmissionResponses)(filters, data === null || data === void 0 ? void 0 : data.responses);
        const updatedResponse = (0, updateResponseObject_1.updateResponseObject)(data, filteredSubmissions);
        return updatedResponse;
    }
    catch (error) {
        throw error;
    }
});
exports.getSubmissionData = getSubmissionData;
