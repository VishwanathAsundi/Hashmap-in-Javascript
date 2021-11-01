function maxPossibleSubsetDiff(a, n) {
  let hmPos = new Map();
  let hmNeg = new Map();

  for (let i = 0; i < n; i++) {
    if (a[i] > 0) {
      if (hmPos.has(a[i])) {
        hmPos.set(a[i], hmPos.get(a[i]) + 1);
      } else {
        hmPos.set(a[i], 1);
      }
    }
    if (a[i] < 0) {
      if (hmNeg.has(a[i])) {
        hmNeg.set(a[i], hmNeg.get(a[i]) + 1);
      } else {
        hmNeg.set(a[i], 1);
      }
    }
  }
  let subSet_sum1 = 0,
    subSet_sum2 = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] > 0 && hmPos.has(a[i]) && hmPos.get(a[i]) == 1) {
      subSet_sum1 += a[i];
    }
    if (a[i] < 0 && hmNeg.has(a[i]) && hmNeg.get(a[i]) == 1) {
      subSet_sum2 += a[i];
    }
  }
  return subSet_sum1 - subSet_sum2;
}

let arr = [5, 8, -1, 4];
let n = arr.length;
document.write("Maximum Difference = " + maxPossibleSubsetDiff(arr, n));
