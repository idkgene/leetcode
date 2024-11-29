var stringHash = function (s, k) {
  const BASE_CHAR_CODE = "a".charCodeAt(0);
  const MOD = 26;

  const n = s.length;
  let result = "";

  let substringStart = 0;

  while (substringStart < n) {
    let hashSum = 0;

    const end = substringStart + k;
    if (k <= 4) {
      for (let i = substringStart; i < end; i++) {
        hashSum += s.charCodeAt(i) - BASE_CHAR_CODE;
      }
    } else {
      let i = substringStart;

      for (; i + 3 < end; i += 4) {
        hashSum += s.charCodeAt(i) - BASE_CHAR_CODE;
        hashSum += s.charCodeAt(i + 1) - BASE_CHAR_CODE;
        hashSum += s.charCodeAt(i + 2) - BASE_CHAR_CODE;
        hashSum += s.charCodeAt(i + 3) - BASE_CHAR_CODE;
      }

      for (; i < end; i++) {
        hashSum += s.charCodeAt(i) - BASE_CHAR_CODE;
      }
    }

    hashSum %= MOD;

    result += String.fromCharCode(BASE_CHAR_CODE + hashSum);

    substringStart += k;
  }

  return result;
};
