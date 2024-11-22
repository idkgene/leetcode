/** 
1. Two Sum (Easy)
 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};

/** 
2. Add Two Numbers (Medium)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 
Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};



/** 
3. Longest Substring Without Repeating Characters (Medium)

Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

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



/**
63. Unique Paths II (Medium)

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
Example 2:


Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
 

Constraints:

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] is 0 or 1. 
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array(n).fill(0);
  dp[0] = 1;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (obstacleGrid[i][j] === 1) {
              dp[j] = 0;
              continue;
          }

          if (j > 0) {
              dp[j] += dp[j - 1];
          }
      }
  }

  return dp[n - 1];
};


/** 
201. Bitwise AND of Numbers Range (Medium)

Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: left = 5, right = 7
Output: 4
Example 2:

Input: left = 0, right = 0
Output: 0
Example 3:

Input: left = 1, right = 2147483647
Output: 0
 

Constraints:

0 <= left <= right <= 231 - 1
*/

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



/** 
264. Ugly Number II (Medium)

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
*/

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


/**
319. Bulb Switcher (Medium)

There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.

Example 1:

Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 1
 

Constraints:

0 <= n <= 109
 */

var bulbSwitch = function (n) {
  return Math.floor(Math.sqrt(n));
};
