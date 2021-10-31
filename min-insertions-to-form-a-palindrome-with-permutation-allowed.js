function minInsertion(str) {
  let hm = new Map();
  for (let i = 0; i < str.length; i++) {
    if (hm.has(str[i])) {
      hm.set(str[i], hm.get(str[i]) + 1);
    } else {
      hm.set(str[i], 1);
    }
  }
  let noOfOddChars = 0;
  for (let [key, value] of hm.entries()) {
    if (value % 2 !== 0) {
      noOfOddChars++;
    }
  }
  return noOfOddChars - 1;
}
let str = "geeksforgeeks";
document.write(
  'Minimum insertions to make "',
  str,
  '" palindrome is :',
  minInsertion(str)
);
