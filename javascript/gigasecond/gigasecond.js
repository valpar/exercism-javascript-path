//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (gsTime) => {
  var gigaSec = 10 ** 12;
  var newTime = gsTime.getTime();
  var endTime = new Date(newTime + gigaSec);
  return endTime;
};
