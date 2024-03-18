"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSubmissionResponses = void 0;
const filterCondition_1 = require("./filterCondition");
const filterSubmissionResponses = (filter, responses) => {
    const filteredResponses = filter && filter.length
        ? responses === null || responses === void 0 ? void 0 : responses.filter((response) => {
            var _a;
            let count = 0;
            (_a = response === null || response === void 0 ? void 0 : response.questions) === null || _a === void 0 ? void 0 : _a.forEach((question) => {
                filter === null || filter === void 0 ? void 0 : filter.forEach((filterVal) => {
                    if ((filterVal === null || filterVal === void 0 ? void 0 : filterVal.id) === (question === null || question === void 0 ? void 0 : question.id)) {
                        const condition = (0, filterCondition_1.filterCondition)(filterVal === null || filterVal === void 0 ? void 0 : filterVal.condition, filterVal === null || filterVal === void 0 ? void 0 : filterVal.value, question === null || question === void 0 ? void 0 : question.value);
                        if (condition) {
                            count += 1;
                        }
                    }
                });
            });
            return count === (filter === null || filter === void 0 ? void 0 : filter.length);
        })
        : responses;
    return filteredResponses;
};
exports.filterSubmissionResponses = filterSubmissionResponses;
