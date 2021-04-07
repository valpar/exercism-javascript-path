//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
//https://www.w3schools.com/js/js_comparisons.asp
//https://www.w3schools.com/js/js_arithmetic.asp

export const isLeap = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
};
