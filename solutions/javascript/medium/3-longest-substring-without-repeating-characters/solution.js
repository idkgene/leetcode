var lengthOfLongestSubstring = function (s) {
  const lastSeen = new Map();

  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    if (lastSeen.has(currentChar)) {
      windowStart = Math.max(windowStart, lastSeen.get(currentChar) + 1);
    }

    lastSeen.set(currentChar, windowEnd);

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
