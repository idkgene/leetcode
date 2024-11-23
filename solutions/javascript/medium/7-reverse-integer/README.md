# 7. Reverse Integer (Medium)

### Problem

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

Constraints:
-231 <= x <= 231 - 1

### Solution

```js
var reverse = function(x) {
    const isNegative = x < 0;;
    x = Math.abs(x);

    let reversedInt = 0;
    let maxInt = Math.pow(2, 31);

    while (x > 0) {
        const remainder = x % 10;
        reversedInt = reversedInt * 10 + remainder;

        if(reversedInt >= maxInt) {
            return 0;
        }
        x = Math.floor(x / 10);
    }
    if (isNegative) {
        reversedInt = -reversedInt;
    }
    return reversedInt;
};
```
