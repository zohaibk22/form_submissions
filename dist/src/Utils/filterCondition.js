"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterCondition = void 0;
const filterCondition = (condition, filterValue, responseValue) => {
    let conditionState = false;
    switch (condition) {
        case "equals": {
            if (typeof filterValue == "string") {
                conditionState =
                    (responseValue === null || responseValue === void 0 ? void 0 : responseValue.toLowerCase()) === (filterValue === null || filterValue === void 0 ? void 0 : filterValue.toLowerCase());
            }
            else {
                conditionState = responseValue === filterValue;
            }
            break;
        }
        case "does_not_equal":
            conditionState = responseValue != filterValue;
            break;
        case "greater_than":
            conditionState = responseValue > filterValue;
            break;
        case "less_than":
            conditionState = responseValue < filterValue;
            break;
        default:
            conditionState = false;
    }
    return conditionState;
};
exports.filterCondition = filterCondition;
