/** 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

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


/** 2. Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

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
var addTwoNumbers = function(l1, l2) {
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

  return dummy.next
};

/** 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

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
var lengthOfLongestSubstring = function(s) {
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
