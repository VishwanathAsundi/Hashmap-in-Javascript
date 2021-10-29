// Time complexity O(n) and space O(n)
function findSubWithGivenSum(a, s, n) {
  let map = new Map();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];

    if (sum == s || map.has(sum - s)) {
      document.write(
        "<br/>Subarray whose sum is ",
        s,
        " : ",
        a.slice(map.get(sum - s) + 1, i + 1)
      );
    }
    map.set(sum, i);
  }
}
let a = [10, 2, -2, -20, 10];
let sum = -10;
findSubWithGivenSum(a, sum, a.length);
