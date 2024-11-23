# 14. Longest Common Prefix (Easy)

### Problem

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

### Solution

```js
var longestCommonPrefix = function(strs) {
    let output = "";
    for (let i = 0; i < strs[0].length; i++) {
        if(strs.every(str=>str[i] === strs[0][i])) output += strs [0][i];
        else break;
    }
    return output;
};
```
