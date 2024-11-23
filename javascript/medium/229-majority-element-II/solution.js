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
