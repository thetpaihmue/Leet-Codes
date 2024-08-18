var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let tArray = Array.from(t);
  let sArray = Array.from(s);

  for (let letter of sArray) {
    if (!tArray.includes(letter)) {
      return false;
    }
    tArray.splice(tArray.indexOf(letter), 1);
  }

  return tArray.length === 0;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("ab", "a"));
