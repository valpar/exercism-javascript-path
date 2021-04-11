//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//https://stackoverflow.com/questions/28127794/difference-between-split-s-and-split/28128029
//https://stackoverflow.com/questions/16253742/return-all-values-from-array-in-lowercase-using-for-loop-instead-of-map/41011916
//https://stackoverflow.com/questions/9705194/replace-special-characters-in-a-string-with-underscore/9705227
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

export const countWords = (words) => {
  let count = {};
  let wordsCount = words.toLowerCase().match(/[a-z]+'[a-z]+|[a-z]+|[0-9]+/g);

  for (let i = 0; i < wordsCount.length; i++) {
    if (count[wordsCount[i]]) {
      count[wordsCount[i]] += 1;
    } else {
      count[wordsCount[i]] = 1;
    }
  }
  return count;
};
