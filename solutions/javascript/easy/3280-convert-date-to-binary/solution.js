a;
var convertDateToBinary = function (date) {
  const [year, month, day] = date.split("-").map(Number);

  const binaryYear = year.toString(2);
  const binaryMonth = month.toString(2);
  const binaryDay = day.toString(2);

  return `${binaryYear}-${binaryMonth}-${binaryDay}`;
};
