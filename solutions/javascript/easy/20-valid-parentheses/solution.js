var isValid = function (s) {
  let brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      if (stack.pop() !== brackets[s[i]]) return false;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
