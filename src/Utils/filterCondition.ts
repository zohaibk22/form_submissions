export const filterCondition = (
  condition: string,
  filterValue: string | number,
  responseValue: string | number
) => {
  let conditionState = false;
  switch (condition) {
    case "equals":
      conditionState = responseValue === filterValue;
      break;
    case "does_not_equal":
      conditionState = responseValue !== filterValue;
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
