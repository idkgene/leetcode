# 264. Ugly Number II (Medium)

### Problem

An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.


Constraints:

1 <= n <= 1690

### Solution

```js
var nthUglyNumber = function (n) {
  const dp = new Array(n);
  dp[0] = 1;

  let p2 = 0,
    p3 = 0,
    p5 = 0;

  let next2, next3, next5;

  for (let i = 1; i < n; i++) {
    next2 = dp[p2] * 2;
    next3 = dp[p3] * 3;
    next5 = dp[p5] * 5;

    dp[i] = Math.min(next2, next3, next5);

    if (dp[i] === next2) p2++;
    if (dp[i] === next3) p3++;
    if (dp[i] === next5) p5++;
  }

  return dp[n - 1];
};
```
