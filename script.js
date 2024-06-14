let isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  } else {
    return true;
  }
  if (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("Twoo", "WooT"));
console.log(isAnagram("ound", "round"));
console.log(isAnagram("apple", "pale"));
