export const filterCondition = (
  condition: string,
  filterValue: string | number,
  responseValue: any
) => {
  let conditionState = false;
  switch (condition) {
    case "equals": {
      if (typeof filterValue == "string") {
        conditionState =
          responseValue?.toLowerCase() === filterValue?.toLowerCase();
      } else {
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
