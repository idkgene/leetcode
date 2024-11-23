var rangeBitwiseAnd = function (left, right) {
  if (left === right) return left;

  if (left === 0) return 0;

  let shift = 0;

  while (left !== right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }

  return left << shift;
};
