function findSubsetWithSum0(a, n) {
  let hm = new Map();

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];

    if (sum == 0 || hm.has(sum)) {
      document.write(a.slice(hm.get(sum) + 1, i + 1));
      return true;
    }
    hm.set(sum, i);
  }
  return false;
}
const arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
if (findSubsetWithSum0(arr, arr.length))
  document.write("<br/>Found a subarray with 0 sum");
else document.write("<br/>No Such Sub Array Exists!");
