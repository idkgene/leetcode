var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 0;
  let right = x;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let square = middle * middle;

    if (square === x) {
      return middle;
    } else if (square > x) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return right;
};
