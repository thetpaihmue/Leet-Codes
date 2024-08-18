var containsDuplicate = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      console.log("true");
      return true;
    }
  }

  console.log("false");
  return false;
};

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4]);
containsDuplicate([2, 14, 18, 22, 22]);
