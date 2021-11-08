// Time complexity is O(n)
// Space Complexity is O(n)
function maxNumOfChocolates(a, n, k) {
  let sum = new Array(n);

  sum[0] = a[0];
  for (let i = 1; i < n; i++) {
    sum[i] = sum[i - 1] + a[i];
  }

  let mp = new Map();
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    let current_sum = sum[i] % k;

    if (current_sum == 0) {
      if (maxSum < sum[i]) {
        maxSum = sum[i];
      }
    } else if (!mp.has(current_sum)) {
      mp.set(current_sum, i);
    } else {
      if (maxSum < sum[i] - sum[mp.get(current_sum)]) {
        maxSum = sum[i] - sum[mp.get(current_sum)];
      }
    }
  }
  return maxSum / k;
}

var arr = [2, 7, 6, 1, 4, 5];
var n = arr.length;
var k = 3;
document.write(
  "Maximum number of chocolates: " + maxNumOfChocolates(arr, n, k)
);
