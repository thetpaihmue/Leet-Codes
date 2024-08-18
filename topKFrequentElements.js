var topKFrequent = function (nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let uniqueNums = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNums[nums[i]] === undefined) {
      uniqueNums[nums[i]] = 1;
    } else {
      uniqueNums[nums[i]] = uniqueNums[nums[i]] + 1;
    }
  }

  let keysSorted = [];
  keysSorted = Object.keys(uniqueNums).sort(function (a, b) {
    return uniqueNums[a] - uniqueNums[b];
  });

  keysSorted.reverse();
  console.log("uniqueNums" + JSON.stringify(uniqueNums));
  console.log("keysSorted" + keysSorted);

  if (uniqueNums[keysSorted[0]] >= k) {
    for (let i = 0; i < k; i++) {
      result.push(keysSorted[i]);
      console.log("result" + result);
      return result;
    }
  } else {
    return [];
  }
};

console.log(topKFrequent([3, 0, 1, 0], 2));
