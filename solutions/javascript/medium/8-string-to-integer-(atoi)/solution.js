var myAtoi = function(s) {
  const i = parseInt(s.trim());

  if (Number.isNaN(i)) {
      return 0;
  }

  if (i < 0) {
      return Math.max(i, -2147483648);
  }

  if (i > 0) {
      return Math.min(i, 2147483647);
  }

  return i;
};
