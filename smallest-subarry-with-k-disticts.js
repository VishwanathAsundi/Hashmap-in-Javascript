// Time complexity of this Approach is O(nLogn) O(n*k) and constant space
function smallestSub(a, n, k) {
  a.sort();
  for (let i = 0; i <= n - k; i++) {
    let distinctCount = 0;
    for (let j = i; j < i + k; j++) {
      if (a[j] != a[j + 1]) {
        distinctCount++;
      }
    }
    if (distinctCount == k) {
      document.write("<br/>", i, " ", i + k - 1);
    }
  }
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5];
let n = arr.length;
let k = 3;
smallestSub(arr, n, k);
