//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

export const findAnagrams = (str1, str2) => {
  const words = str1.toLowerCase().split("").sort().join("");
  return str2.filter(
    (match) =>
      match.toLowerCase() != str1.toLowerCase() &&
      match.toLowerCase().split("").sort().join("") === words
  );
};
