var reverse = function (x) {
  const isNegative = x < 0;
  x = Math.abs(x);

  let reversedInt = 0;
  let maxInt = Math.pow(2, 31);

  while (x > 0) {
    const remainder = x % 10;
    reversedInt = reversedInt * 10 + remainder;

    if (reversedInt >= maxInt) {
      return 0;
    }
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    reversedInt = -reversedInt;
  }
  return reversedInt;
};
