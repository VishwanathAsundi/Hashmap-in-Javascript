// time complexity O(m+n) and constant additional space O(1)

function countPairs(a, b, m, n, sum) {
  let i = 0,
    j = n - 1;
  let count = 0;
  while (i < m && j >= 0) {
    if (a[i] + b[j] == sum) {
      console.log(a[i], ",", b[j]);
      count++;
      i++;
      j--;
    } else if (a[i] + b[j] < sum) {
      i++;
    } else {
      j--;
    }
  }
  return count;
}
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 3, 5, 8];
let m = arr1.length;
let n = arr2.length;
let x = 10;
document.write("Count = " + countPairs(arr1, arr2, m, n, x));
