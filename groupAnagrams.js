var groupAnagrams = function (strs) {
  let anagrams = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    console.log("sortedStr: " + sortedStr);

    if (anagrams[sortedStr] === undefined) {
      anagrams[sortedStr] = [strs[i]];
    } else {
      anagrams[sortedStr].push(strs[i]);
    }
  }

  console.log(anagrams);
  for (let key in anagrams) {
    result.push(anagrams[key]);
  }

  return result;
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
