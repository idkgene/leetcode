var lengthOfLastWord = function (s) {
  s = s.trim();

  if (s.length === 0) {
    return 0;
  }

  const words = s.split(" ");

  return words[words.length - 1].length;
};
