"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateResponseObject = void 0;
const updateResponseObject = (responseObj, filteredData) => {
    return Object.assign(Object.assign({}, responseObj), { responses: filteredData, totalResponses: filteredData.length });
};
exports.updateResponseObject = updateResponseObject;
