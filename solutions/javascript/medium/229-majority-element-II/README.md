# 229. Majority Element II (Medium)

### Problem

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109

Follow up: Could you solve the problem in linear time and in O(1) space?

### Solution

```js
var majorityElement = function(nums) {
  if (!nums || nums.length === 0) return [];
  if (nums.length === 1) return [nums[0]]

  let [cand1, cand2] = [null, null];
  let [count1, count2] = [0, 0]

  for (const num of nums) {
      if (num === cand1) {
          count1++
      } else if (num === cand2) {
          count2++;
      } else if (count1 === 0) {
          cand1 = num;
          count1 = 1;
      } else if (count2 === 0) {
          cand2 = num;
          count2 = 1;
      } else {
          count1--;
          count2--
      }
  }

  [count1, count2] = [0, 0]
  const threshold = Math.floor(nums.length /3)

  for (const num of nums) {
      if (num === cand1) count1++;
      else if (num === cand2) count2++
  }

  const res = []
  if (count1 > threshold) res.push(cand1);
  if (count2 > threshold) res.push(cand2);

  return res;
};
```
