//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//export const gigasecond = (date) => new Date(date.getTime() + 1e12);

export const gigasecond = (date) => {
  var gigaSec = 1e12;
  var newTime = date.getTime();
  var endTime = new Date(newTime + gigaSec);
  return endTime;
};
